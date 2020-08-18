-- Deletes old revisions
DELETE a,b,c
FROM wp_posts a
LEFT JOIN wp_term_relationships b ON ( a.ID = b.object_id)
LEFT JOIN wp_postmeta c ON ( a.ID = c.post_id )
LEFT JOIN wp_term_taxonomy d ON ( b.term_taxonomy_id = d.term_taxonomy_id)
WHERE a.post_type = 'revision'
AND DATE(a.post_date) <= NOW() - INTERVAL 30 DAY;

-- Deletes orphaned metas
DELETE pm
FROM wp_postmeta pm
LEFT JOIN wp_posts wp ON wp.ID = pm.post_id
WHERE wp.ID IS NULL;