import React, { Component } from 'react';
import './StaticTable.css';

class StaticTable extends Component {
  render() {
    return (
      	<div>
			<table>
				<thead>
					<tr>
						<th>PREP</th>
						<th>HOLD</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th className="timer-on">2.00</th>
						<th>2.00</th>
					</tr>
					<tr>
						<th>1.45</th>
						<th>2.00</th>
					</tr>
				</tbody>
			</table>
      	</div>
    );
  }
}

export default StaticTable;
