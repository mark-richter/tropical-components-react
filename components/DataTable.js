import React from 'react';
import $ from 'jquery';
import 'datatables.net';
import './DataTable.scss';

class Table extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            opts: {
                data: this.props.data,
                columns: this.props.columns
            }
         };
    }

    render() {
        return (
            <div>
                <table className="table" ref={elem=>$(elem).dataTable(this.state.opts)} />
            </div>
        );
    }
}

export default Table;