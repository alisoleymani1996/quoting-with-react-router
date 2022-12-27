from django.db import models


class Quote(models.Model):
    author = models.CharField(max_length=20)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.author

    class Meta:
        verbose_name = 'Quote item'
        verbose_name_plural = 'Quote items'
