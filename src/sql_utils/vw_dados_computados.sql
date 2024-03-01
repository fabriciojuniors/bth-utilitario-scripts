create view vw_dados_computados as
select *,
		substr(url, instr(url, 'filter=') + length('filter='), instr(substr(url, instr(url, 'filter=') + length('filter=')), '&') - 1) as filter,
		substr(url, instr(url, 'fields=') + length('fields='), instr(substr(url, instr(url, 'fields=') + length('fields=')), '&') - 1) as fields,
		substr(url, instr(url, 'filter=') + length('filter='), instr(substr(url, instr(url, 'filter=') + length('filter=')), '&') - 1) like '%entidade.id%' as hasFilterEntidade,
		substr(url, instr(url, 'filter=') + length('filter='), instr(substr(url, instr(url, 'filter=') + length('filter=')), '&') - 1) like '%exercicio.ano%' as hasFilterExercicio,
		substr(url, instr(url, 'filter=') + length('filter='), instr(substr(url, instr(url, 'filter=') + length('filter=')), '&') - 1) like '%mes%' as hasFilterMes,
		(substr(url, instr(url, 'filter=') + length('filter='), instr(substr(url, instr(url, 'filter=') + length('filter=')), '&') - 1) like '%id%' AND 
     	 substr(url, instr(url, 'filter=') + length('filter='), instr(substr(url, instr(url, 'filter=') + length('filter=')), '&') - 1) not like '%entidade.id%') as hasFilterId
from dados d 
where url not like '%metadados%';
-- drop view vw_dados_computados;