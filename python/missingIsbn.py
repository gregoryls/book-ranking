import json
from isbnlib import meta, isbn_from_words

# remove isbntools, just need isbnlib

def lookup_isbn(title, author):
    # Load bookList from JSON file
    with open('src/bookList.json', 'r', encoding='utf-8') as file:
        book_list = json.load(file)

    for book in book_list:


        if book.get('ISBN13') == None:
           
           title_author_str = f"{book.get('Title')} {book.get('Author')}"
           isbn13 = isbn_from_words(title_author_str)

           if isbn13:
            
                book['ISBN13'] = isbn13 
                print(isbn13)
           
    with open('test_export.json','w',encoding='utf-8') as file:
        json.dump(book_list, file, indent=2, ensure_ascii=False)
        #     if isbn:
        #         # If ISBN is already available in the bookList, print it
        #         print(f"ISBN for '{title}' by {author}: {isbn}")
        #     else:
        #         # If ISBN is not available, try looking it up using isbnlib
        #         isbn = meta(title, author)['ISBN-13']
        #         print(f"Lookup ISBN for '{title}' by {author}: {isbn}")
        #         book['isbn'] = isbn  # Update bookList with the ISBN

    # Update bookList JSON file with added ISBNs
    # with open('bookList.json', 'w') as file:
    #    json.dump(book_list, file, indent=2)

# Example usage
lookup_isbn("Arboreality", "Rebecca Campbell")
