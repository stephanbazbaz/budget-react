import React from 'react';
import './App.css';
import { Icon, Grid, Container, Segment } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import ModalEdit from './components/ModalEdit'
function App() {
  const [isOpen, setisOpen] = React.useState(false)
  const [entries, setentries] = React.useState(initialEntries)
  const [description, setdescription] = React.useState('')
  const [value, setvalue] = React.useState('')
  const [isExpense, setisExpense] = React.useState(true)
  const [entryId, setentryId] = React.useState()
  const [incomeTotal, setincomeTotal] = React.useState(0)
  const [expensesTotal, setexpensesTotal] = React.useState(0)
  const [total, settotal] = React.useState(0)
  React.useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setentries(newEntries)
      resetEntries()
    }
  }, [isOpen])

  React.useEffect(() => {
    let totalIncomes = 0
    let totalExpenses = 0
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpenses += Number(entry.value)
      }
      return totalIncomes += Number(entry.value)
    })
    settotal(totalIncomes - totalExpenses)
    setexpensesTotal(totalExpenses)
    setincomeTotal(totalIncomes)
  }, [entries])

  function resetEntries() {
    setdescription('')
    setvalue('')
    setisExpense(true)
  }
  function deleteEntey(id) {
    const result = entries.filter(entry => entry.id !== id);
    setentries(result)
  }

  function addEntry() {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense })
    setentries(result)
    console.log('result', result);
    console.log('entries', entries);
  }

  function editEntry(id) {
    console.log(`edit entry with id `, id);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index]
      setentryId(id)
      setdescription(entry.description)
      setvalue(entry.value)
      setisExpense(entry.isExpense)
      setisOpen(true)
    }
  }
  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance
        title='Your Balance'
        value={total}
        size='small'
      />
      <DisplayBalances
        incomeTotal={incomeTotal}
        expensesTotal={expensesTotal}
      />
      <MainHeader
        title='History'
        type='h3'
      />

      <EntryLines
        editEntry={editEntry}
        setisOpen={setisOpen}
        deleteEntey={deleteEntey}
        entries={entries}
      />

      <MainHeader
        title='Add new transactions'
        type='h3'
      />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setdescription={setdescription}
        setvalue={setvalue}
        setisExpense={setisExpense}
      />
      <ModalEdit
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setdescription={setdescription}
        setvalue={setvalue}
        setisExpense={setisExpense}
        isOpen={isOpen}
        setisOpen={setisOpen}
      />
    </Container>
  );
}

export default App;
var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000.00,
    isExpense: false
  },
  {
    id: 2,
    description: 'Water bill',
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: 300.00,
    isExpense: true
  },
  {
    id: 4,
    description: 'Power Bill',
    value: 50.00,
    isExpense: true
  }
];