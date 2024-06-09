import {
	Button,
	Card,
	Col,
	Row,
	Collapse as BootstrapCollapse,
} from 'react-bootstrap'

// css
import 'react-bootstrap-typeahead/css/Typeahead.css'
import 'rsuite/dist/rsuite-no-reset.min.css'

//dummy data
import { employeeRecords } from './data'
import { Column } from 'react-table'
import { Employee } from './types'

// components
import { FormInput, PageSize, Table } from '@/components'
import { PageBreadcrumb } from '@/components'
import { useState } from 'react'
import { DateRangePicker } from 'rsuite'

const columns: ReadonlyArray<Column> = [
	{
		Header: 'Sr No',
		accessor: 'srNo',
		defaultCanSort: true,
	},
	{
		Header: 'image',
		accessor: 'name',
		defaultCanSort: true,
	},
	{
		Header: 'Book Name',
		accessor: 'bookname',
		defaultCanSort: false,
	},
	{
		Header: 'Author',
		accessor: 'author',
		defaultCanSort: true,
	},
	{
		Header: 'Category Name',
		accessor: 'Category Name',
		defaultCanSort: true,
	},
	{
		Header: 'Book Type',
		accessor: 'Book Type',
		defaultCanSort: true,
	},
	{
		Header: 'View Library',
		accessor: 'View Library',
		defaultCanSort: true,
	},
	{
		Header: 'View Frequency',
		accessor: 'View Frequency',
		defaultCanSort: true,
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

const Materials = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true)
	const toggle = () => setIsOpen(!isOpen)
	return (
		<>
			<PageBreadcrumb title="Materials" subName="Tables" />
			<Row>
				<Col>
					<Card>
						<Card.Header>
							<div className="my-2 d-flex justify-content-between">
							<Button className="btn-outline-purple" onClick={toggle}>
								<i className="ri-equalizer-line me-1" /> Filter
							</Button>
								<Button variant="info">
									<i className="bi bi-plus-lg" /> <span>Add New E-Book</span>
								</Button>
							</div>
							
						</Card.Header>
						<Card.Body>
							<BootstrapCollapse in={isOpen}>
								<div>
									<Row>
										<Col lg={4}>
											<FormInput
												label="Search Name"
												type="text"
												name="text"
												containerClass="mb-3"
												key="text"
											/>
										</Col>

										<Col lg={4}>
											<div className="mb-3">
												<label className="form-label d-block">Date Range</label>
												<DateRangePicker
													className="w-100"
													appearance="default"
													defaultValue={[new Date(), new Date()]}
												/>
											</div>
										</Col>
									</Row>
								</div>
							</BootstrapCollapse>
						</Card.Body>

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

export default Materials
