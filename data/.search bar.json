computed: {
    level() {
        return this.filteredList[this.selected]?.[0];
    },
    filteredList() {
        if (!this.searchQuery) return this.list;

        return this.list.filter(([level]) =>
            level &&
            level.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    },
    video() {
        if (!this.level.showcase) {
            return embed(this.level.verification);
        }
        return embed(
            this.toggledShowcase
                ? this.level.showcase
                : this.level.verification
        );
    },
},
