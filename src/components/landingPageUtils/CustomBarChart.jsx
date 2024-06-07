import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Sat', Deposit: 500, Withdraw: 0 },
  { name: 'Sun', Deposit: 300, Withdraw: 100 },
  { name: 'Mon', Deposit: 200, Withdraw: 200 },
  { name: 'Tue', Deposit: 400, Withdraw: 300 },
  { name: 'Wed', Deposit: 100, Withdraw: 400 },
  { name: 'Thu', Deposit: 300, Withdraw: 200 },
  { name: 'Fri', Deposit: 400, Withdraw: 300 },
];

const CustomBarChart = () => {
  return (

    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 40, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Deposit" fill="#0A06F4" barSize={15} radius={[10, 10, 0, 0]} />
        <Bar dataKey="Withdraw" fill="#16DBCC" barSize={15} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;

