class DAO {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        const record = {
            ...item,
            created: new Date().toISOString(),
        };

        this.items.push(record);

        return record;
    }

    getItems() {
        // get sorted items by created date (naive implementation)
        const sorted = this.items.sort(function(a,b){
            if (a.created > b.created) {
                return -1;
            }
            
            if (a.created < b.created) {
                return 1;
            }
            
            return 0; 
        });

        return sorted;
    }

    averageScore() {
        this.items.reduce(this.items.score, )
    }

    reset() {
        this.items = [];
    }
}

module.exports = new DAO();