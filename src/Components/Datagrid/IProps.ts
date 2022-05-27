export default interface IDatagridProps {
    source: any[];

    columns: IDatagridColumn[];
}

export interface IDatagridColumn{
    dataField: string;

    label?: string;
    labelPosition?: 'left' | 'center' | 'right';
    labelVerticalAlign?: boolean;
    labelStyle?: React.CSSProperties;

    dataPosition?: 'left' | 'center' | 'right';
    dataVerticalAlign?: boolean;
}
