import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { LineChart } from "@mui/x-charts/LineChart";
import dataJson from "@/data.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const { data, genderData, villageData, uData, xLabels } = dataJson;

const GaugeChart = ({ percent }: { percent: number }) => {
  const gaugeData = [
    { name: "Эрэгтэй", value: 120 - percent, color: "#0088FE" },
    { name: "Эмэгтэй", value: 100 - percent, color: "#39E0CF" },
    { name: "Бусад", value: 100 - percent, color: "#D3D3D3" },
  ];

  return (
    <PieChart width={220} height={180}>
      <Pie
        data={gaugeData}
        cx="50%"
        cy="70%"
        startAngle={180}
        endAngle={0}
        innerRadius={50}
        outerRadius={80}
        dataKey="value"
      >
        {gaugeData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <text x="50%" y="65%" textAnchor="middle" fontSize={24} fill="#333">
        {percent}%
      </text>
      {gaugeData.map((el, index) => (
        <text
          key={`label-${index}`}
          x={index === 0 ? "25%" : index === 1 ? "55%" : "80%"}
          y="80%"
          textAnchor="middle"
          fontSize={14}
          fill={el.color}
        >
          {el.name}
        </text>
      ))}
    </PieChart>
  );
};

export const StatisticClient = () => {
  const [hoveredVillage, setHoveredVillage] = useState<string | null>(null);
  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-bold">Албан тушаалын төрөл</h2>
          <p className="text-3xl font-semibold">$69,700</p>
          <p className="text-green-500">▲ 2.2%</p>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="20%"
                cy="55%"
                innerRadius={50}
                outerRadius={60}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {data.map((el, index) => (
                <text
                  key={`text-${index}`}
                  x="80%"
                  y={`${30 + index * 15}%`}
                  textAnchor="middle"
                  fontSize={14}
                  fill="#333"
                >
                  {el.name}
                </text>
              ))}
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
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={villageData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="60%"
                innerRadius={50}
                outerRadius={70}
              >
                {villageData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    onMouseEnter={() => setHoveredVillage(entry.name)}
                    onMouseLeave={() => setHoveredVillage(null)}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {hoveredVillage && (
            <div className="absolute z-120 top-0 left-0 bg-white p-2 shadow-lg rounded">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={hoveredVillage} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-bold">Зарын тоо</h2>
          <LineChart
            width={600}
            height={300}
            series={[{ data: uData, label: "uv" }]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticClient;
