import {
    Table,
    Select,
    Row,
    Col
} from 'antd'

import Currency from 'react-currency-formatter'

const ASApp = () => {

    const dataSource = [
        {
            teklif: '1321312 - Ticari Yangın',
            prim: 24323.57,
            key: 3
        },
        {
            teklif: '1321312 - Dask Sigorta',
            prim: 678678,
            key: 5
        },
        {
            teklif: '1321312 - Zorunlu Trafik',
            prim: 10829,
            key: 1
        },
        {
            teklif: '1321312 - Dask',
            prim: 3342,
            key: 2
        },
        {
            teklif: '1321312 - Kasko',
            prim: 4564,
            key: 4
        },
    ];

    const columns = [
        {
            title: 'Bekleyen Teklifler',
            dataIndex: 'teklif',
            key: 'teklif',
        },
        {
            title: ({sortOrder}) => {
                return (
                    <div className="d-flex j-end">
                        Prim {sortOrder && (
                            <> 
                                - {sortOrder === "ascend" ? "Artan" : "Azalan"}<img src="/sorting.svg" alt="svg" style={{maxHeight: 20}} />
                            </>
                        )}
                    </div>
                )
            },
            dataIndex: 'prim',
            key: 'prim',
            sorter: (a, b) => a.prim - b.prim,
            render: (prim) => <Currency quantity={prim} currency="TL" locale="tr_TR" decimal="," group="." />,
            align: "right"
        }
    ];

    return <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ y: 250 }}
        pagination={false}
    />
}

export default ASApp
