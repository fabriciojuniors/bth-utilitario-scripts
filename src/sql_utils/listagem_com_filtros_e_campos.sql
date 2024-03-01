select distinct titulo, databaseid, entidadeid, codigoretorno, url,
		substr(url, instr(url, 'filter=') + length('filter='), instr(substr(url, instr(url, 'filter=') + length('filter=')), '&') - 1) as filter,
		substr(url, instr(url, 'fields=') + length('fields='), instr(substr(url, instr(url, 'fields=') + length('fields=')), '&') - 1) as fields
from dados d 
where url not like '%metadados%'
order by titulo asc