
import React from 'react'
import { Editor } from '@tinymce/tinymce-react' 
import {Controller} from 'react-hook-form'
// Import TinyMCE assets
import 'tinymce/tinymce'; // Core TinyMCE
import 'tinymce/themes/silver/theme'; // Theme
import 'tinymce/icons/default/icons'; // Default icons

// Import plugins (as needed)
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/charmap';
//import 'tinymce/plugins/print';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/code';
import 'tinymce/plugins/help';
import 'tinymce/plugins/table';

export default function RTE({label, name, control, defaultValue=''}) {
  return (
    <div className='w-full'>
        {label && <label className='text-sm text-gray-600'>{label}</label>}

        <Controller 
          name={name || 'editor'}
          control={control}
          render={({field: {onChange}}) =>(
            <Editor
              initialValue={defaultValue}
              init={{
                  initialValue: defaultValue,
                  height: 500,
                  menubar: true,
                  base_url:'/node_modules/tinymce',
                  plugins: [
                      "image",
                      "advlist",
                      "autolink",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                      "anchor",
                  ],
                  toolbar:"undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                  content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}

//The RTE component is a reusable component that we can use to add a rich text editor to our forms.
//The component takes several props, including name, control, and defaultValue.
//The name prop is used to set the name of the editor field, which is used to identify the field in the form.
//The control prop is used to integrate the editor with the react-hook-form library, which is used to manage form state.
//The defaultValue prop is used to set the initial value of the editor field.
//label is a prop that is used to set the label for the editor field, which is displayed above the editor.
//Controller is a component from react-hook-form that allows us to integrate the TinyMCE editor with our form, so that changes to the editor are reflected in the form state.
//The render prop of the Controller component is used to render the Editor component and pass the onChange function to the onEditorChange prop of the Editor component.
//field is a prop that is passed to the render function of the Controller component, which contains the onChange function that is used to update the form state when the editor content changes.
//Editor is a component from the TinyMCE library that is used to render the rich text editor, which allows users to format text, add images, and more.
//The initialValue prop of the Editor component is used to set the initial value of the editor field, which is passed from the defaultValue prop of the RTE component.
//The init prop of the Editor component is used to configure the editor, including setting the height, plugins, toolbar, and content style.
//plugins means the features that are available in the editor, such as image, lists, link, and more.
//toolbar is a set of buttons that are displayed above the editor, which allow users to format text, add images, and more, such as undo, redo, bold, italic, and more.
//content_style is used to set the font family and font size of the editor content.
//onEditorChange is a prop of the Editor component that is called when the editor content changes, and it updates the form state using the onChange function passed from the Controller component.
