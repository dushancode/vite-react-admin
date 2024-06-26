import {
	Button,
	Card,
	Col,
	Row,
	Collapse as BootstrapCollapse,
	Modal,
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
import { useToggle } from '@/hooks'

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
	const [isOpenFilter, setIsOpenFilter] = useState<boolean>(true)

	const toggle = () => setIsOpenFilter(!isOpenFilter)

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
								<ToggleBetweenModals />
							</div>
						</Card.Header>
						<Card.Body>
							<BootstrapCollapse in={isOpenFilter}>
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

const ToggleBetweenModals = () => {
	const [isOpen, toggleModal] = useToggle()
	const [isNextOpen, toggleNextModal] = useToggle()
	const [isNext2Open, toggleNext2Modal] = useToggle()
	return (
		<>
			<Button variant="info" onClick={toggleModal}>
				<i className="bi bi-plus-lg" /> <span>Add New E-Book</span>
			</Button>

			{/* 1st model  */}
			<Modal
				className="fade"
				size="lg"
				show={isOpen}
				onHide={toggleModal}
				centered>
				<Modal.Header closeButton>
					<h5 className="modal-title">Modal 1</h5>
				</Modal.Header>
				<Modal.Body className="modal-body">
					<FormInput
						label="Name"
						type="text"
						name="name"
						containerClass="mb-3"
						key="text"
					/>
					<FormInput
						name="select"
						label="Written By"
						type="select"
						containerClass="mb-3"
						className="form-select"
						key="select">
						<option defaultValue="selected">1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</FormInput>
					<FormInput
						name="select"
						label="Translated By"
						type="select"
						containerClass="mb-3"
						className="form-select"
						key="select">
						<option defaultValue="selected">1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</FormInput>
					<FormInput
						label="Publisher"
						type="text"
						name="address"
						containerClass="mb-3"
						key="text"
					/>
					<FormInput
						label="Year Of Printed"
						type="text"
						name="address"
						containerClass="mb-3"
						key="text"
					/>
					<FormInput
						label="First Publisher (Optional)"
						type="text"
						name="address"
						containerClass="mb-3"
						key="text"
					/>
					<FormInput
						label="First Printed Year (optional)"
						type="date"
						
						name="First Printed Year"
						containerClass="mb-3"
						key="text"
					/>
					<FormInput
						label="ISBN"
						type="text"
						name="address"
						containerClass="mb-3"
						key="text"
					/>
					<FormInput
						label="Description"
						type="text"
						name="address"
						containerClass="mb-3"
						key="text"
					/>
					<FormInput
						label="Address"
						type="text"
						name="address"
						containerClass="mb-3"
						key="text"
					/>
					<FormInput
						label="Address"
						type="text"
						name="address"
						containerClass="mb-3"
						key="text"
					/>
					<FormInput
						label="Address"
						type="text"
						name="address"
						containerClass="mb-3"
						key="text"
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary"
						onClick={() => {
							toggleModal()
							toggleNextModal()
						}}>
						Next
					</Button>
				</Modal.Footer>
			</Modal>
			{/* 2st model  */}
			<Modal
				className="fade"
				size="lg"
				show={isNextOpen}
				onHide={toggleNextModal}
				centered>
				<Modal.Header closeButton>
					<h5 className="modal-title">Modal 2</h5>
				</Modal.Header>
				<Modal.Body>
					Hide this modal and show the first with the button below.
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary"
						onClick={() => {
							toggleNextModal()
							toggleNext2Modal()
						}}>
						Next
					</Button>
				</Modal.Footer>
			</Modal>
			{/* 3st model  */}
			<Modal
				className="fade"
				size="lg"
				show={isNext2Open}
				onHide={toggleNext2Modal}
				centered>
				<Modal.Header closeButton>
					<h5 className="modal-title">Modal 2</h5>
				</Modal.Header>
				<Modal.Body>
					Hide this modal and show the first with the button below.
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary"
						onClick={() => {
							toggleNext2Modal()
						}}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
