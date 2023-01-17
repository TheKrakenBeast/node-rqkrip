class ColumnError {
    constructor(message, value, column) {
        this.message = message;
        this.value = value;
        this.column = column;
    }
}

module.exports = ColumnError