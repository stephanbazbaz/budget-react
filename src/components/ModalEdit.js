import React from 'react'
import { Modal, Button, Form, Icon, Grid, Container, Header, Statistic, Segment } from 'semantic-ui-react'
import EntryForm from './EntryForm'
function ModalEdit({
    isOpen,
    setisOpen,
    addEntry,
    description,
    value,
    isExpense,
    setdescription,
    setvalue,
    setisExpense
}) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setdescription={setdescription}
                    setvalue={setvalue}
                    setisExpense={setisExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setisOpen(false)}>Close</Button>
                <Button onClick={() => setisOpen(false)} primary
                >OK</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit
