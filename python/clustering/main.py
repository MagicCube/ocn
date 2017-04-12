from sklearn.cluster import KMeans
import codecs
import numpy as np
import json


def cluster(n_clusters):
    features = []
    for movie in movies:
        features.append(movie['feature'])
    X = np.array(features)
    kmeans = KMeans(n_clusters=n_clusters, random_state=0).fit(X)

    clusters = []
    for i in xrange(n_clusters):
        clusters.append({
            '_tags': [],
            'movies': []
        })

    clusterIndexes = kmeans.predict(X)
    i = 0
    for clusterIndex in clusterIndexes:
        m = movies[i]
        m = {
            'id': m['id'],
            'title': m['title'],
            'img': m['images']['large'],
            'feature': m['feature']
        }
        clusters[clusterIndex]['movies'].append(m)
        i = i + 1

    for cluster in clusters:
        sum = None
        for movie in cluster['movies']:
            if sum is None:
                sum = np.array(movie['feature'])
            else:
                sum += np.array(movie['feature'])
            movie.pop('feature', None)
        topTagIndexes = np.array(sum).argsort()[::-1][:sum.shape[0]]
        for i in xrange(5):
            tagIndex = topTagIndexes[i]
            cluster['_tags'].append(tags[tagIndex])

    with codecs.open('../../data/results/clusters-' + str(n_clusters) + '.json', 'w', 'utf-8') as f:
        json.dump(clusters, f, indent=2, sort_keys=True, ensure_ascii=False)




with codecs.open('../../data/tags.csv', 'r', 'utf-8') as f:
    tags = f.read().splitlines()

with open('../../data/movies.json', 'r') as f:
    movies = json.load(f, encoding="utf-8")

cluster(5)
cluster(10)
cluster(15)
cluster(20)
cluster(25)
cluster(50)
