import {
	Button,
	Card,
	Col,
	Row,
} from 'react-bootstrap'

// css
import 'react-bootstrap-typeahead/css/Typeahead.css'
import 'rsuite/dist/rsuite-no-reset.min.css'

//dummy data
import { employeeRecords } from './data'
import { Column } from 'react-table'
import { Employee } from './types'

// components
import {  PageSize, Table } from '@/components'
import { PageBreadcrumb } from '@/components'


const columns: ReadonlyArray<Column> = [
	{
		Header: 'Sr No',
		accessor: 'srNo',
		defaultCanSort: true,
	},
	{
		Header: 'CreateDate',
		accessor: 'createDate',
		defaultCanSort: true,
	},
	{
		Header: 'Name',
		accessor: 'name',
		defaultCanSort: false,
	},
	{
		Header: 'NIC',
		accessor: 'nic',
		defaultCanSort: true,
	},
	{
		Header: 'Contact No',
		accessor: 'contactNo',
		defaultCanSort: false,
	},
	{
		Header: 'Email',
		accessor: 'email',
		defaultCanSort: false,
	},
	{
		Header: 'Menu Access',
		accessor: 'menuAccess',
		defaultCanSort: false,
	},
	{
		Header: 'Action',
		accessor: 'action',
		defaultCanSort: false,
	},
	
	
]

const sizePerPageList: PageSize[] = [
	{
		text: '5',
		value: 5,
	},
	{
		text: '10',
		value: 10,
	},
	{
		text: '25',
		value: 25,
	},
	{
		text: 'All',
		value: employeeRecords.length,
	},
]

const Products = () => {
	return (
		<>
			<PageBreadcrumb title="Products" subName="Orders" />
			<Row>
				<Col>
					<Card>
						<Card.Header>
							<div className="my-2 d-flex justify-content-between">
								<Button variant="info">
									<i className="bi bi-plus-lg" /> <span>Add New Products</span>
								</Button>
							</div>				
						</Card.Header>
						<Card.Body>
							<Table<Employee>
								columns={columns}
								data={employeeRecords}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Products
