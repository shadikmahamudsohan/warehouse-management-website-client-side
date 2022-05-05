import { Card, Col, Row } from 'react-bootstrap';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    CartesianGrid,
    PieChart,
    Pie
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
    { name: '17 - 30 Years old', value: 33 },
    { name: '31 - 50 Years old', value: 62 },
    { name: '>=51 Years old', value: 10 },
];


const Dashboard = () => {
    return (
        <div className='container mx-auto'>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className='shadow px-3'>
                        <Card.Body>
                            <Card.Title className='fs-2'> 2000 </Card.Title>
                            <Card.Text>
                                Item in Stock
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow px-3'>
                        <Card.Body>
                            <Card.Title className='fs-2'> 100 </Card.Title>
                            <Card.Text>
                                Orders this week
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow px-3'>
                        <Card.Body>
                            <Card.Title className='fs-2'> 400 </Card.Title>
                            <Card.Text>
                                Total Orders
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4 mt-3">
                <Col>
                    <Card className='shadow px-3'>
                        <Card.Body>
                            <Card.Title>
                                Sales Report
                            </Card.Title>
                            <ResponsiveContainer width="100%" aspect={2}>
                                <LineChart data={data}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="This Week" stroke="#8884d8" />
                                    <Line type="monotone" dataKey="Last Week" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow px-3'>
                        <Card.Body>
                            <Card.Title>
                                Weekly Top Seller
                            </Card.Title>
                            <ResponsiveContainer width="100%" aspect={2}>
                                <PieChart>
                                    <Pie
                                        dataKey="value"
                                        isAnimationActive={false}
                                        data={data01}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        label
                                    />
                                    <Legend />
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;
