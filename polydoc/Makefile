TARGET = main

$(TARGET).pdf : $(TARGET).tex
	cd out && pdflatex $(TARGET).tex

out:
	mkdir out

$(TARGET).tex : $(TARGET).md out
	pandoc --chapters --filter ~/.pandoc/filters/thm.py -o out/$(TARGET).tex -s $(TARGET).md

