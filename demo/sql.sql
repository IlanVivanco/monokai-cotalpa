SELECT
	p.ID,
	p.post_title AS 'VS Code',
	country AS 'Theme:',
	main_activity AS 'Monokai Cotalpa',
	trip_tag AS 'Tags'
FROM
	wp_posts p
	LEFT JOIN (
		SELECT
			tr.object_id,
			GROUP_CONCAT(
				t.name
				ORDER BY
					t.name ASC SEPARATOR ' | '
			) AS trip_tag
		FROM
			wp_term_relationships tr
			INNER JOIN wp_term_taxonomy tt USING (term_taxonomy_id)
			INNER JOIN wp_terms t USING (term_id)
		WHERE
			taxonomy = 'trip_tag'
		GROUP BY
			tr.object_id
	) tq1 ON (p.ID = tq1.object_id)
	LEFT JOIN (
		SELECT
			tr.object_id,
			t.name AS country
		FROM
			wp_term_relationships tr
			INNER JOIN wp_term_taxonomy tt USING (term_taxonomy_id)
			INNER JOIN wp_terms t USING (term_id)
		WHERE
			taxonomy = 'country'
		GROUP BY
			tr.object_id
	) tq2 ON (p.ID = tq2.object_id)
	LEFT JOIN (
		SELECT
			tr.object_id,
			t.name AS main_activity
		FROM
			wp_term_relationships tr
			INNER JOIN wp_term_taxonomy tt USING (term_taxonomy_id)
			INNER JOIN wp_terms t USING (term_id)
		WHERE
			taxonomy = 'main_activity'
		GROUP BY
			tr.object_id
	) tq3 ON (p.ID = tq3.object_id)
WHERE
	p.post_type = 'trip'
	AND p.post_status = 'publish'
ORDER BY
	p.ID
LIMIT
	3000
