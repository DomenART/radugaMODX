<h4 id="comment-new-link">
	<a href="#" class="btn btn-default">[[%ticket_comment_create]]</a>
</h4>

<div class="comment-form" id="comment-form-placeholder">
	<div class="comment-form__heading">Добавить комментарий</div>
	<form id="comment-form" action="" method="post" class="well">
		<div id="comment-preview-placeholder"></div>
		<input type="hidden" name="thread" value="[[+thread]]" />
		<input type="hidden" name="parent" value="0" />
		<input type="hidden" name="id" value="0" />

		<div class="form-group">
			<label for="comment-editor"></label><br>
			<textarea name="text" id="comment-editor" cols="30" rows="10" class="form-control"></textarea>
		</div>

		[[+captcha]]

		<div class="form-actions">
			<input type="button" class="btn btn-default preview" value="[[%ticket_comment_preview]]" title="Ctrl + Enter" />
			<button type="submit" class="btn btn-primary submit btn-more" title="Ctrl + Shift + Enter" />
				<span>Отправить</span>
				<svg width="20" height="20" class="btn-more__arrow">
                    <use xlink:href="{$.assets_url}web/img/sprite.svg#arrow-right"/>
                </svg>
			</button>
			<span class="time"></span>
		</div>
	</form>
</div>


<!--tickets_captcha
<div class="form-group">
	<label for="comment-captcha" id="comment-captcha">[[+captcha]]</label>
	<input type="text" name="captcha" value="" id="comment-captcha" class="form-control" />
	<span class="error"></span>
</div>
-->