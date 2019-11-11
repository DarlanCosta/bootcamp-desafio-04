import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Obama',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPMIhN7dVKpGsFG43O4M6TmdGw832F9DLuM20-eGsT8itXsh8L'
        },
        date: '10 Nov 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '10 Nov 2019',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time! '
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Riquelme Dias',
          avatar: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2016/07/riquelme-corinthians.jpg'
        },
        date: '10 Nov 2019',
        content:
          'Estou fazendo o Bootcamp, melhor curso que já fiz!',
        comments: [
          {
            id: 4,
            author: {
              name: 'Renata Souza',
              avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGjSald9hnsWjm-Fg9lQ-f5tdSvd9_JunArGtn5RNzXZADgwC8'
            },
            date: '10 Nov 2019',
            content:
              'Tenho interesse também!'
          },
          {
            id: 5,
            author: {
              name: 'Cristina Araujo',
              avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiANjkmEESeLt_TA8EDm_gqaaMv1oxwSRObse5IBWQJGUq5-UJ'
            },
            date: '10 Nov 2019',
            content:
              'Vou fazer o curso também! Comeõ no final deste mês!'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=51'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return(
      <>
      {posts.map(post => <PostItem key={post.id} data={post} />)}
      </>
    )
  }
}

export default PostList;