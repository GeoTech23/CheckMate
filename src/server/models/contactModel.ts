import pg from 'pg';
const { Pool } = pg;

const PG_URI =
	'postgres://loswevsn:S0HXt3-6Q3O3KpMeGCVsVWASo3fgOYqF@drona.db.elephantsql.com/loswevsn';
const pool = new Pool({
	connectionString: PG_URI,
});

export default /*module.exports =*/ {
	query: (text: string /*params: [], callback*/) => {
		console.log('executed query', text);
		return pool.query(text /*, params, callback*/);
	},
};
