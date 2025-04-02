import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { LineChart } from "@mui/x-charts/LineChart";
import dataJson from "@/data.json";

const { data, genderData, pData, uData, xLabels } = dataJson;

const GaugeChart = ({ percent }: { percent: number }) => {
  const gaugeData = [
    { value: 120 - percent, color: "#0088FE" },
    { value: 100 - percent, color: "#39E0CF" },
    { value: 100 - percent, color: "#D3D3D3" },
  ];
  console.log(percent);

  return (
    <PieChart width={200} height={120}>
      <Pie
        data={gaugeData}
        cx="50%"
        cy="100%"
        startAngle={180}
        endAngle={0}
        innerRadius={40}
        outerRadius={60}
        dataKey="value"
      >
        {gaugeData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export const StatisticClient = () => {
  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-bold">Албан тушаалын төрөл</h2>
          <p className="text-3xl font-semibold">$69,700</p>
          <p className="text-green-500">▲ 2.2%</p>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={50}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-bold">
            Нийт ажил горилогчдын хүйсийн харьцаа
          </h2>
          <div className="flex justify-center items-center h-32">
            <GaugeChart percent={72.5} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-bold">Орон нутгийн ажил горилогч</h2>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={genderData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={50}
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-bold">Шугаман график</h2>
          <LineChart
            width={500}
            height={300}
            series={[
              { data: pData, label: "pv" },
              { data: uData, label: "uv" },
            ]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticClient;
