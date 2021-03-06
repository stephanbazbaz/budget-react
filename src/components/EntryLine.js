import React from 'react'
import { Button, Form, Icon, Grid, Container, Header, Statistic, Segment } from 'semantic-ui-react'
import ModalEdit from './ModalEdit'
function EntryLine({editEntry, id, description, value, isExpense = false, deleteEntey ,setisOpen}) {

    // const [isOpen, setisOpen] = React.useState(false)
    return (
        <>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'>
                            {description}
                        </Grid.Column>
                        <Grid.Column width={3} textAlign='right'>{value}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name='edit' onClick={() => editEntry(id)} bordered />
                            <Icon name='trash' bordered onClick={() => { deleteEntey(id) }} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
         
        </>
    )
}

export default EntryLine
