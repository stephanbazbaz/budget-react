import React from 'react'
import { Button, Form, Icon, Grid, Container, Header, Statistic, Segment } from 'semantic-ui-react'

function MainHeader({ title, type = 'h1' }) {

    return (
        <Header as={type}>{title}</Header>
    )
}

export default MainHeader
