class Display {
    constructor(displayPreviousValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculador = new Calculadora();
        this.operationType = undefined;
        this.currentValue = '';
        this.previousValue = '';
        this.signs = {
            sum: '+',
            substract: '-',
            multiply: 'x',
            divide: '/', 
        }
    }

    clear() {
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.toPrintValues();
    }

    clearAll() {
        this.currentValue = '';
        this.previousValue = '';
        this.operationType = undefined;
        this.toPrintValues();
    }

    compute(tipo) {
        this.operationType !== 'equal' && this.calcular();
        this.operationType = tipo;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.toPrintValues();
    }

    addNumber(number) {
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.toPrintValues();
    }

    toPrintValues() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.operationType] || ''}`;
    }

    calcular() {
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if( isNaN(currentValue)  || isNaN(previousValue) ) return
        this.currentValue = this.calculador[this.operationType](previousValue, currentValue);
    }
}