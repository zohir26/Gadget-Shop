import { Helmet } from "react-helmet";
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    // Get the data from the loader
    const data = useLoaderData();
    
    // Map data to match the chart's expected format
    const chartData = data.map(product => ({
        name: product.product_title,  // Use product title as x-axis label
        price: product.price          // Use price as y-axis value
    }));

    return (
        <div className="w-full py-10">
            <Helmet>
                <title>Statistics-Gadget-Heaven</title>     
            </Helmet>
                <div className="w-250 flex justify-center items-center">
                <BarChart width={1000} height={500} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
                </div>
        </div>
    );
};

export default Statistics;
