import React from 'react'
import { Checkbox, Button, Form, Icon, Grid, Container, Header, Statistic, Segment } from 'semantic-ui-react'

function EntryForm({
    description,
    value,
    isExpense,
    setdescription,
    setvalue,
    setisExpense
}) {
    return (
        <>
            <Form.Group>
                <Form.Input
                    icon='tags'
                    width={12}
                    label='Description'
                    placeholder='New shiny thing'
                    value={description}
                    onChange={(event) => setdescription(event.target.value)}
                />
                <Form.Input
                    width={4}
                    label='Value'
                    placeholder='100.00'
                    icon='dollar'
                    iconPosition='left'
                    value={value}
                    onChange={(event) => setvalue(event.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox
                    label='is expense'
                    toggle
                    checked={isExpense}
                    onChange={() => setisExpense(oldState => !oldState)}
                />
            </Segment>
        </>
    )
}

export default EntryForm
