import React from 'react';
var rp = require('request-promise');

class DataList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        // データを取得する
        var options = {
            uri: 'http://localhost:3001/api/test',
            transform2xxOnly: true,
            transform: function(body) {
                return JSON.parse(body);
            },
        };
        rp(options)
            .then(data => {
                this.setState({
                    data: data
                });
            });
    }

    render() {
        const data = this.state.data;

        const rows = data.map(d => {
            return (
                <tr>
                    <td>{d.id}</td>
                    <td>{d.col1}</td>
                    <td>{d.col2}</td>
                    <td>{d.col3}</td>
                    <td>{d.sort_order}</td>
                </tr>
            );
        });

        return (
            <div>
                {data.length} 件見つかりました。
                <table className="bp3-html-table" style={{width: "100%"}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>カラム１</th>
                        <th>カラム２</th>
                        <th>カラム３</th>
                        <th>表示順</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DataList;
