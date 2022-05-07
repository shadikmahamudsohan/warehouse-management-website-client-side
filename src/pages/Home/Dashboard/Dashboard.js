import { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Aos from 'aos'
import { BiStoreAlt } from 'react-icons/bi'
import { BsCalendarWeek, BsCart } from 'react-icons/bs'

import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    CartesianGrid,
    PieChart,
    Pie,
    Cell
} from 'recharts';

// Sample chart data
const data = [
    {
        "name": "Sat",
        "This Week": 100,
        "Last Week": 150,
    },
    {
        "name": "Sun",
        "This Week": 150,
        "Last Week": 350,
    },
    {
        "name": "Mun",
        "This Week": 470,
        "Last Week": 200,
    },
    {
        "name": "Tue",
        "This Week": 300,
        "Last Week": 400,
    },
    {
        "name": "Wed",
        "This Week": 650,
        "Last Week": 280,
    },
    {
        "name": "Thu",
        "This Week": 239,
        "Last Week": 480,
    },
    {
        "name": "Fri",
        "This Week": 700,
        "Last Week": 530,
    }
]


// pie chart
const data01 = [
    { name: '17 - 30 Years', value: 13 },
    { name: '31 - 50 Years', value: 32 },
    { name: '>=51 Years', value: 60 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const COLORS = ['#004ca3', '#0070d1', '#0088FE'];


const Dashboard = ({ dark }) => {
    // animation
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
        <section className='container mx-auto my-5'>
            <h1 className='mb-5 sectionTitle' style={{ textAlign: 'right' }}>_________________ Dashboard</h1>
            <Row data-aos='fade-up' xs={1} md={3} className="g-4">
                <Col>
                    <Card className={`shadow px-3 ${dark && 'bg-dark text-light'}`}>
                        <Card.Body className='d-flex justify-content-around align-items-center'>
                            <div>
                                <Card.Title className='fs-2'> 2000 </Card.Title>
                                <Card.Text>
                                    Item in Stock
                                </Card.Text>
                            </div>
                            <Card.Text >
                                <BiStoreAlt size='75' style={{ opacity: '90%' }} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={`shadow px-3 ${dark && 'bg-dark text-light'}`}>
                        <Card.Body className='d-flex justify-content-around align-items-center'>
                            <div>
                                <Card.Title className='fs-2'> 100 </Card.Title>
                                <Card.Text>
                                    Orders this week
                                </Card.Text>
                            </div>
                            <Card.Text >
                                <BsCalendarWeek size='70' style={{ opacity: '90%' }} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={`shadow px-3 ${dark && 'bg-dark text-light'}`}>
                        <Card.Body className='d-flex justify-content-around align-items-center'>
                            <div>
                                <Card.Title className='fs-2'> 400 </Card.Title>
                                <Card.Text>
                                    Total Orders
                                </Card.Text>
                            </div>
                            <Card.Text >
                                <BsCart size='70' style={{ opacity: '90%' }} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4 mt-3">
                <Col data-aos='fade-up'>
                    <Card className={`shadow h-100 px-3 ${dark && 'bg-dark text-light'}`}>
                        <Card.Body>
                            <Card.Title>
                                Weekly Sales Report
                            </Card.Title>
                            <ResponsiveContainer width="100%" aspect={2}>
                                <LineChart data={data}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="This Week" stroke="#004ca3" />
                                    <Line type="monotone" dataKey="Last Week" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col data-aos='fade-up'>
                    <Card className={`shadow h-100 ${dark && 'bg-dark text-light'}`}>
                        <Card.Body>
                            <Card.Title>
                                Weekly Top Buyer
                            </Card.Title>
                            <ResponsiveContainer width="100%" aspect={2}>
                                <PieChart>
                                    <Pie
                                        dataKey="value"
                                        isAnimationActive={true}
                                        data={data01}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={'100%'}
                                        fill="#8884d8"
                                        // label
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Legend className='d-none' />
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}

export default Dashboard;
