import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Michel Oliveira',
          avatar: 'https://i.pravatar.cc/150?img=64'
        },
        date: '10 Nov 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
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
        id: 2,
        author: {
          name: 'Riquelme Dias',
          avatar: 'https://i.pravatar.cc/150?img=33'
        },
        date: '10 Nov 2019',
        content:
          'Estou fazendo o Bootcamp, melhor curso que já fiz!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Renata Souza',
              avatar: 'https://i.pravatar.cc/150?img=41'
            },
            date: '10 Nov 2019',
            content:
              'Tenho interesse também!'
          },
          {
            id: 2,
            author: {
              name: 'Cristina Araujo',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '10 Nov 2019',
            content:
              'Vou fazer o curso também! Comeõ no final deste mês!'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Renan de Paula',
          avatar: 'https://i.pravatar.cc/150?img=51'
        },
        date: '10 Nov 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 1,
            author: {
              name: 'Adriele Menezes',
              avatar: 'https://i.pravatar.cc/150?img=28'
            },
            date: '10 Nov 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 2,
            author: {
              name: 'Almero Silva',
              avatar: 'https://i.pravatar.cc/150?img=12'
            },
            date: '10 Nov 2019',
            content:
              'Sim a comunidade no Discord esta crescendo cada dia mais, esta sendo uma revolução, bora codar.'
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