import * as uuid from 'uuid';
import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import {createRef, ref} from 'lit/directives/ref.js';
import type Table from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';
import '../button';

const mockData = [
  {
    id: uuid.v4(),
    name: 'Size',
    options: [
      {
        id: uuid.v4(),
        name: 'XS',
        synonyms: [
          {
            id: uuid.v4(),
            name: 'Extra Small',
          },
        ],
      },
      {
        id: uuid.v4(),
        name: 'S',
        synonyms: [
          {
            id: uuid.v4(),
            name: 'Small',
          },
        ],
      },
      {
        id: uuid.v4(),
        name: 'M',
        synonyms: [
          {
            id: uuid.v4(),
            name: 'Medium',
          },
        ],
      },
      {
        id: uuid.v4(),
        name: 'L',
        synonyms: [
          {
            id: uuid.v4(),
            name: 'Large',
          },
        ],
      },
      {
        id: uuid.v4(),
        name: 'XL',
        synonyms: [
          {
            id: uuid.v4(),
            name: 'Extra Large',
          },
        ],
      },
    ],
  },
  {
    id: uuid.v4(),
    name: 'Color',
    options: [
      {
        id: uuid.v4(),
        name: 'Red',
      },
      {
        id: uuid.v4(),
        name: 'Blue',
      },
      {
        id: uuid.v4(),
        name: 'Green',
      },
      {
        id: uuid.v4(),
        name: 'Yellow',
      },
      {
        id: uuid.v4(),
        name: 'Black',
      },
    ],
  },
  {
    id: uuid.v4(),
    name: 'Material',
    options: [
      {
        id: uuid.v4(),
        name: 'Cotton',
      },
      {
        id: uuid.v4(),
        name: 'Polyester',
      },
      {
        id: uuid.v4(),
        name: 'Silk',
      },
      {
        id: uuid.v4(),
        name: 'Wool',
      },
      {
        id: uuid.v4(),
        name: 'Leather',
      },
    ],
  },
  {
    id: uuid.v4(),
    name: 'Brand',
    options: [
      {
        id: uuid.v4(),
        name: 'Nike',
      },
      {
        id: uuid.v4(),
        name: 'Adidas',
      },
      {
        id: uuid.v4(),
        name: 'Puma',
      },
      {
        id: uuid.v4(),
        name: 'Reebok',
      },
      {
        id: uuid.v4(),
        name: 'Under Armour',
      },
    ],
  },
  {
    id: uuid.v4(),
    name: 'Price',
    options: [
      {
        id: uuid.v4(),
        name: 'Under $25',
      },
      {
        id: uuid.v4(),
        name: '$25 to $50',
      },
      {
        id: uuid.v4(),
        name: '$50 to $100',
      },
      {
        id: uuid.v4(),
        name: '$100 to $200',
      },
      {
        id: uuid.v4(),
        name: 'Over $200',
      },
    ],
  },
];

type StoryArgsProps = {};

const Template: UIStoryArgs<Table, StoryArgsProps> = () => {
  const tableRef = createRef<Table>();

  return html`
    <stylospectrum-button @click=${() => tableRef.value?.uncheckedAll()}>
      un checked all
    </stylospectrum-button>

    <stylospectrum-table
      ${ref(tableRef)}
      .rowData=${mockData.map((data) => {
        return {
          id: data.id,
          name: data.name,
          children: data.options.map((option: any) => ({
            id: option.id,
            option: option.name,
            synonyms: option.synonyms || [],
          })),
        };
      })}
      .columnDefs=${[
        {headerName: 'Name', field: 'name'},
        {headerName: 'option', field: 'option'},
        {
          headerName: 'synonyms',
          field: 'synonyms',
          cellRenderer: ({value}: any) =>
            value.map((synonym: any) => synonym.name).join(', '),
        },
      ]}
      @select=${(e: CustomEvent) => {
        console.log(e.detail);
      }}
    >
    </stylospectrum-table>
  `;
};

export default {
  title: 'Table',
  component: 'stylospectrum-table',
  tags: ['autodocs'],
} as Meta<Table>;

export const Basic = Template.bind({});
Basic.args = {};
