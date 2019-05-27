import React from 'react';

import './Table.scss';

const Table = ({ data }) => (
	<table className="search__table">
		<thead>
			<tr>
				{Object.keys(data[0]).map((head, idx) => (
					<th key={idx}>{head}</th>
				))}
			</tr>
		</thead>
		<tbody>
			{data.map((value, idx) => (
				<tr key={idx}>
					{Object.values(value).map((objValue, idx) => (
						<td key={idx}>{objValue}</td>
					))}
				</tr>
			))}
		</tbody>
	</table>
);

export default Table;