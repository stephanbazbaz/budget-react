import React from 'react'
import { Checkbox, Button, Form, Icon, Grid, Container, Header, Statistic, Segment } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm'
function NewEntryForm({
  addEntry,
  description,
  value,
  isExpense,
  setdescription,
  setvalue,
  setisExpense
}) {

  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setdescription={setdescription}
        setvalue={setvalue}
        setisExpense={setisExpense}
      />
      <ButtonSaveOrCancel
        addEntry={addEntry}
      />
    </Form>
  )
}

export default NewEntryForm
