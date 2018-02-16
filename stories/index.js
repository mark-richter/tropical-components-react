import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import Table from '../components/DataTable';

import '../components/sijl.scss';

const dataTablesData = [
    {
        name: "Dave Boucher",
        nickname: "DB"
    }, 
    {
        name: "Ian Kramer", 
        nickname: "IK"
    },
    {
        name: "Caglar Cozer", 
        nickname: "CC"
    },
    {
        name: "Chris Fetters", 
        nickname: "CF"
    }
]

const dataTablesColumns = [
    {
        title: 'Name',
        width: 120,
        data: 'name'
    },
    {
        title: 'Nickname',
        width: 180,
        data: 'nickname'
    },
];

storiesOf('Buttons', module)
  .add('default', () => (
    <div class="sijl">
        <Button onClick={action('clicked')}>Hello Button</Button>
    </div>
  ))
  .add('colors', () => (
    <div class="sijl">
        <div className="container">
            <div className="row">
                <Button onClick={action('clicked')}>default</Button>
                <Button color='success' onClick={action('clicked')}>success</Button>
                <Button color='danger' onClick={action('clicked')}>danger</Button>
                <Button color='warning' onClick={action('clicked')}>warning</Button>
                <Button color='primary' onClick={action('clicked')}>primary</Button>
            </div>
        </div>
    </div>
  ))
  .add('shapes', () => (
    <div class="sijl">
        <div className="container">
            <div className="row">
                <Button onClick={action('clicked')}>default</Button>
                <Button shape='round' onClick={action('clicked')}>round</Button>
            </div>
        </div>
    </div>
  ))
  .add('styles', () => (
    <div class="sijl">
        <div className="container">
            <div className="row">
                <Button onClick={action('clicked')}>default</Button>
                <Button style='outline' onClick={action('clicked')}>outline default</Button>
                <Button color="success" style='outline' onClick={action('clicked')}>outline success</Button>
                <Button color="danger" shape="round" style='outline' onClick={action('clicked')}>outline success round</Button>
            </div>
        </div>
    </div>
  ));

  storiesOf('DataTable', module)
    .add('default', () => (
        <div class="sijl">
            <Table data={dataTablesData} columns={dataTablesColumns} />
        </div>
    ));