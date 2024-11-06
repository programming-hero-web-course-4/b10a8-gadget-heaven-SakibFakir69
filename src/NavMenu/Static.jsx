import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useLocation } from "react-router-dom";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Static() {
  const data = useLoaderData();

  /// work one

  /// purcshe button
  //  favicon
  /// link
  // review and deploy

  /// make unique componenet
  /// laoder data nad use react re-chart

  /// staice 404 problem
  // chart purcase button
  /// add gogale drive pdf link

 


  return (
    <div>
      <Helmet>
        <title>Static</title>
      </Helmet>
      <div className="bg-custome-color p-10">
        <h1 className="text-center text-3xl font-bold text-white">
          Statistics
        </h1>
        <p className="text-white mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <p className="text-2xl mt-10 mb-4 ml-4 font-semibold ">Statistics</p>
      <section
        style={{ height: 300, width: "100%" }}
        className="px-6 bg-gray-100 p-4 rounded-md"
      >
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="horizontal"
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Area dataKey="total" fill="#8884d8" stroke="#8884d8" barSize={20} /> */}

            <Bar dataKey="price" barSize={30} fill="#413ea0" />

            <Line dataKey="rating" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}

export default Static;
