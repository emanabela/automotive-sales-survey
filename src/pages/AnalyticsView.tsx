import { useEffect, useState } from "react";
import { getSurveyData } from "../services/storageService";
import { StatsType } from "../types/analyticsTypes";
import { initialStats } from "../constants/analyticsConstants";
import {
  calculateStats,
  getRespondentDistributionPieChartData,
} from "../services/analyticsService";
import KeyMetrics from "../components/analytics/KeyMetrics";
import CarDistributionChart from "../components/analytics/CarDistributionChart";
import { useNavigate } from "react-router-dom";
import GenericPieChart from "../components/shared/GenericPieChart";

const AnalyticsView = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<StatsType | null>(initialStats);

  useEffect(() => {
    const data = getSurveyData();
    const stats = calculateStats(data);
    setStats(stats);
  }, []);

  return (
    <>
      <div className="flex items-start">
        <button className="mr-2 text-2xl" onClick={() => navigate("/")}>
          ❮
        </button>
        <p className="text-2xl font-bold text-center mb-4">
          Survey Analysis Dashboard
        </p>
      </div>
      {!stats ? (
        <div className="flex items-center justify-center">
          <p className="text-2xl font-bold text-center text-red-500">
            No data available
          </p>
        </div>
      ) : (
        <>
          <div role="tablist" className="tabs tabs-boxed tabs-lg">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Key Metrics"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-10">
              <KeyMetrics stats={stats} />
            </div>
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="PieChart - Respondent Distribution"
            />
            <div role="tabpanel" className="tab-content p-10">
              <GenericPieChart
                data={getRespondentDistributionPieChartData(stats)}
              />
            </div>
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="PieChart - Drivetrain"
            />
            <div role="tabpanel" className="tab-content p-10">
              <GenericPieChart data={stats.drivetrainDistribution} />
            </div>
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="BarChart - Car Distribution"
            />
            <div role="tabpanel" className="tab-content p-10">
              <CarDistributionChart carDistribution={stats.carDistribution} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AnalyticsView;
