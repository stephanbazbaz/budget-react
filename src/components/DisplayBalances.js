import React from 'react'
import DisplayBalance from './DisplayBalance'

import { Button, Form, Icon, Grid, Container, Header, Statistic, Segment } from 'semantic-ui-react'

function DisplayBalances() {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance
                title='Income'
                value='1253.45'
                color='green'
              />
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance
                title='Expenses'
                value='653.45'
                color='red'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances
