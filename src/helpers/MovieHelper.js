export const getFilmFilter = (filter, array) => {
	if (filter === '') {
		return array;
	}
	return array.filter(a => a.title.toLowerCase().includes(filter) || a.description.toLowerCase().includes(filter));
};
