import {
  Table,
  Select,
  Row,
  Col
} from 'antd'

function App() {

  const dataSource = [
    {
      key: '1',
      name: 'Kazım',
      age: 40,
      address: '10 Downing Street',
      locations: [{
        name: "İstanbul",
        code: "34"
      },{
        name: "Ankara",
        code: "06"
      },{
        name: "Adana",
        code: "01"
      }]
    },
    {
      key: '2',
      name: 'Hakan',
      age: 39,
      address: '10 Downing Street',
      locations: [{
        name: "İstanbul",
        code: "34"
      },{
        name: "Ankara",
        code: "06"
      },{
        name: "Adana",
        code: "01"
      }]
    },
    {
      key: '3',
      name: 'Mehmet',
      age: 41,
      address: '10 Downing Street',
      locations: [{
        name: "İstanbul",
        code: "34"
      },{
        name: "Ankara",
        code: "06"
      },{
        name: "Adana",
        code: "01"
      }]
    }
  ];

  const columns = [
    {
      title: (props) => (
        <div>Name <img src="/sorting.svg" alt="svg" /></div>
      ),
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (text) => (
        <div style={{ color: '#aa0000', fontWeight: 'bold' }}>
          {text}
        </div>
      )
    },
    {
      title: 'Lokasyonlar',
      dataIndex: 'locations',
      key: 'locations',
      render: (locations) => {
        return (
          <Select style={{width: 100}} onChange={(selected) => {
            console.log(selected)
          }}>
            {
              locations.map((location,index) => (
                  <Select.Option 
                    key={index} 
                    value={location.code}
                  >
                    {location.name}
                  </Select.Option>
                )
              )
            }
          </Select>
        )
    }
    }
  ];

  return <Table
    dataSource={dataSource}
    columns={columns}
    scroll={{ y: 250 }}
    pagination={false}
  />
}

export default App;
