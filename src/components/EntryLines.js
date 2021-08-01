import React from 'react'
import EntryLine from './EntryLine'
import { Icon, Grid, Container, Segment } from 'semantic-ui-react'

function EntryLines({editEntry, entries, deleteEntey,setisOpen }) {
    React.useEffect(() => {
        console.log(entries);
    }, [])
    return (
        <Container>
            {entries.map((entry) => {
                return (
                    <EntryLine
                    setisOpen={setisOpen}
                        {...entry}
                        deleteEntey={deleteEntey}
                        key={entry.id}
                        editEntry={editEntry}

                    />
                )
            })}
        </Container>
    )
}

export default EntryLines
