import { FC } from "react";
import IDatagridProps from "./IProps";
import styled from 'styled-components';

const Datagrid: FC<IDatagridProps> = ({ source, columns }) => {
    return (
        <Grid>
            <Column
                grow={false}
                style={{minWidth: "50px", borderRight: "1px solid black"}}
            >
                <ColumnHeader
                    horizontal='center'
                    vertical
                >

                </ColumnHeader>
                {source.sort((a, b) => a.id - b.id).map((item, j) => {
                    return (
                        <ColumnData
                            key={j}
                            horizontal='center'
                            vertical
                            className={j % 2 === 0 ? 'even' : 'odd'}
                        >
                            <input type='checkbox' />
                        </ColumnData>
                    )
                })}
            </Column>

            {columns.map((column, i) => {
                return (
                    <Column
                        key={i}
                        grow
                    >
                        <ColumnHeader
                            horizontal={column.labelPosition}
                            vertical={column.labelVerticalAlign}
                        >
                            {column.label || column.dataField}
                        </ColumnHeader>
                        {source.sort((a, b) => a.id - b.id).map((item, j) => {
                            return (
                                <ColumnData
                                    key={j}
                                    horizontal={column.dataPosition}
                                    vertical={column.dataVerticalAlign}
                                    className={j % 2 === 0 ? 'even' : 'odd'}
                                >
                                    {item[column.dataField]}
                                </ColumnData>
                            )
                        })}
                    </Column>
                )
            })}
        </Grid>
    )
}

export default Datagrid;

const Grid = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    
    border: 1px solid black;
`;

const ColumnData = styled.div<{
    horizontal?: 'left' | 'right' | 'center';
    vertical?: boolean;
}>`
    display: flex;
    width: 100%;
    min-height: 30px;
    align-items: ${p => p.vertical ? 'center' : 'flex-start'};
    justify-content: ${p => p.horizontal === "right" ? 'flex-end' : p.horizontal === "center" ? 'center' : 'flex-start'};
`;

const Column = styled.div<{
    grow: boolean
}>`
    .even {
        background-color: rgba(0, 0, 0, 0.1);
    }
    
    flex-grow: ${p => p.grow ? 1 : 0};
`;

const ColumnHeader = styled.div<{
    horizontal?: 'left' | 'right' | 'center';
    vertical?: boolean;
}>`
    display: flex;
    width: 100%;
    min-height: 30px;
    align-items: ${p => p.vertical ? 'center' : 'flex-start'};
    justify-content: ${p => p.horizontal === "right" ? 'flex-end' : p.horizontal === "center" ? 'center' : 'flex-start'};

    border-bottom: 1px solid black;
    border-right: 1px solid black;
`;

