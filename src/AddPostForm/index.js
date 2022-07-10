import React, { useState, useEffect } from 'react';
import { Button } from '../shared/Button';
import Input from '../shared/Input';
import Textarea from '../shared/Textarea';

function AddPostForm({ addPost, activateModal, isModalClosed }) {
    const [formItems, setFormItems] = useState({title: '', content: ''});
    const [failValidationFields, setFailValidationFields] = useState({title: false, content: false, titleFirstOpen: true, contentFirstOpen: true});

    function addNewPost(event) {
        event.preventDefault();
        const validationValue = [titleValidation(), contentValidation()].reduce((prev, validated) => prev || validated, false);

        if (validationValue) {
            return;
        }

        setFormItems({title: '', content: ''});
        addPost((oldPostsList) => [{...formItems, id: Date.now()}, ...oldPostsList]);
        setFailValidationFields({title: '', content: '', titleFirstOpen: true, contentFirstOpen: true});
        activateModal(false);
    }

    useEffect(() => {
        if (isModalClosed) {
            setFormItems({title: '', content: ''});
            setFailValidationFields({title: '', content: '', titleFirstOpen: true, contentFirstOpen: true});
        }
    }, [isModalClosed]);

    function titleValidation() {
        let isVaidationFail = false;

        if (failValidationFields.titleFirstOpen) {
            setFailValidationFields((failValidationFields) => ({...failValidationFields, titleFirstOpen: false}));
        } else {
            isVaidationFail = formItems.title.length === 0;
            setFailValidationFields((failValidationFields) => ({...failValidationFields, title: isVaidationFail}));
        }

        return isVaidationFail;
    }

    function contentValidation() {
        let isVaidationFail = false;

        if (failValidationFields.contentFirstOpen) {
            setFailValidationFields((failValidationFields) => ({...failValidationFields, contentFirstOpen: false}));
        } else {
            isVaidationFail = formItems.content.length === 0;
            setFailValidationFields((failValidationFields) => ({...failValidationFields, content: isVaidationFail}));
        }

        return isVaidationFail;
    }

    useEffect(() => {
        titleValidation()
    }, [formItems.title]);
    useEffect(() => {
        contentValidation()
    }, [formItems.content]);

    return (
        <div>
            <h1>Добавить пост</h1>
            <form action="add-post" className="post-add__form" onSubmit={ addNewPost }>
                <Input 
                    value={ formItems.title } 
                    onChange={ (event) => setFormItems({...formItems, title: event.target.value}) }
                    type="text" 
                    placeholder="Название поста..." 
                    id="PostTitle" 
                    labelText="Заголовок поста"
                    isInvalid={ failValidationFields.title }
                />
                <Textarea 
                    value={ formItems.content } 
                    onChange={ (event) => setFormItems({...formItems, content: event.target.value}) } 
                    placeholder="Содержимое поста..." 
                    id="PostConent" 
                    type='textarea' 
                    labelText="Содержимое поста"
                    isInvalid={ failValidationFields.content }
                />
                <Button className="mt-2" type="submit">Добавить</Button>
            </form>
        </div>
    );
}

export default AddPostForm;