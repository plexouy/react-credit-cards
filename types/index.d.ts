export default ReactCreditCards;
declare class ReactCreditCards {
    static propTypes: {
        acceptedCards: any;
        callback: any;
        cvc: any;
        expiry: any;
        focused: any;
        issuer: any;
        locale: any;
        name: any;
        number: any;
        placeholders: any;
        preview: any;
    };
    static defaultProps: {
        acceptedCards: any[];
        locale: {
            valid: string;
        };
        placeholders: {
            name: string;
        };
        preview: boolean;
    };
    constructor(props: any);
    componentDidUpdate(prevProps: any): void;
    get issuer(): any;
    get number(): any;
    get expiry(): string;
    get options(): {
        issuer: any;
        maxLength: number;
    };
    setCards(): void;
    render(): any;
}
