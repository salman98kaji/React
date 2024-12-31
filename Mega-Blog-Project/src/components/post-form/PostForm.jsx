import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {Button, Input, RTE, Select} from '../index'
import {useSelector} from 'react-redux'
import service from '../../appwrite/config'


function PostForm({post}) {

  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues: {
      title: post?.title || '',   
      content: post?.content || '',
      slug: post?.$id || '',
      status: post?.status || 'active',
    }
  });

  const navigate = useNavigate()
  const userData = useSelector(state => state.auth.userData)

  const submit = async(data) => {
    if(post) {
      const file = data.image[0] ? await service.fileUpload(data.image[0]) : null;
      
      if(file) {
        service.deleteFile(post.featuredImage);
      }

      const dbPost = await service.updatePost(post.$id, {...data, featuredImage: file ? file.$id :undefined});

      if(dbPost) navigate(`/post/${dbPost.$id}`)
        
    } else {
        const file = await service.fileUpload(data.image[0]);
        
        if(file) {
          const fileId = file.$id;
          data.featuredImage = fileId;
          const dbPost = await service.createPost({...data, userId: userData.$id});

          if(dbPost) navigate(`/post/${dbPost.$id}`)
        }
    }
  }

  const slugTransform = useCallback((value) => {
    if(value && typeof value === 'string') {
      return value
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z\d\s]+/g, '-')
      .replace(/\s+/g, '-');
    }
    return '';
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, {name}) => {
      if(name === 'title') {
        setValue('slug', slugTransform(value.title),{shouldValidate: true});
      }
    });
    return () => subscription.unsubscribe()
  },[watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
      <div className='w-2/3 px-2 text-green-400 text-xl'>
        <Input 
          label='Title: ' 
          placeholder='Title' 
          className='mb-4' 
          {...register('title', {required: true})} 
        />
        <Input 
          label='Slug: ' 
          placeholder='Slug' 
          className='mb-4' 
          {...register('slug', {required: true})}
          onInput={(e) => { 
            setValue('slug', slugTransform(e.currentTarget.value), {shouldValidate: true}); 
          }}
        />
        <RTE 
          label='Content: ' 
          name='content'
          control={control}
          defaultValue={getValues('content')} 
        />    
      </div>
      <div className='w-1/3 px-2 text-white text-xl'>
        <Input 
          label='Featured Image: ' 
          type='file'
          className='mb-11' 
          accept='image/*'
          {...register('image',{required : !post})}
        />
        {post && (
          <div className='mb-4 w-full'>
            <img 
              src={service.getFilePreview(post.featuredImage)}
              alt={post.title}
              className='rounded-lg w-full'
            />
          </div>
        )}
        <Select 
          options={['active','inactive']}
          label='Status: '
          className='mb-4'
          {...register('status')}
        />
        <Button type='submit' className='w-full'bgColor={post ? 'bg-green-500' : undefined}> 
          {post ? 'Update' :'Submit'}
        </Button>
      </div>
    </form>
  )
}

export default PostForm