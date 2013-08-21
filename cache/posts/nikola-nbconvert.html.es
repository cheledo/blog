<p>Importando, en un posteo del blog, un html estático (obtenido con nbconvert)
de un notebook (ejemplo) de IPython:</p>
<pre class="literal-block">
.. raw:: html
   :file: /home/damian/Desarrollos/To_PR/SITIOS/Github_Pages/damian_blog/files/Test.html
</pre>
<!-- TEASER_END -->
<p>Funciona! Pueden verlo a continuación... pronto estarán los themes disponibles.</p>
<blockquote>
<div class="text_cell_render border-box-sizing rendered_html">
<p><strong>Update:</strong> made full github repo for blog-as-notebooks, and updated instructions on how to more easily configure everything and use the newest nbconvert for a more streamlined workflow.</p>
<p>Since the notebook was introduced with <a href="http://ipython.org/ipython-doc/rel-0.12.1/whatsnew/version0.12.html">IPython 0.12</a>, it has proved to be very popular, and we are seeing great adoption of the tool and the underlying file format in research and education.  One persistent question we've had since the beginning (even prior to its official release) was whether it would be possible to easily write blog posts using the notebook.  The combination of easy editing in markdown with the notebook's ability to contain code, figures and results, makes it an ideal platform for quick authoring of technical documents, so being able to post to a blog is a natural request.</p>
<p>Today, in answering a query about this from a colleague, I decided to try again the status of our conversion pipeline, and I'm happy to report that with a bit of elbow-grease, at least on Blogger things work pretty well!<br />
</p>
<p>This post was <em>entirely</em> written as a notebook, and in fact I have now created a <a href="https://github.com/fperez/blog">github repo</a>, which means that you can see it directly <a href="http://nbviewer.ipython.org/urls/raw.github.com/fperez/blog/master/120907-Blogging with the IPython Notebook.ipynb">rendered in IPyhton's nbviewer app</a>.</p>
<p>The purpose of this post is to quickly provide a set of instructions on how I got it to work, and to test things out.  Please note: this requires code that isn't quite ready for prime-time and is still under heavy development, so expect some assembly.</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h2>
  Converting your notebook to html with nbconvert
</h2>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>The first thing you will need is our <a href="https://github.com/ipython/nbconvert">nbconvert</a> tool that converts notebooks across formats.  The README file in the repo contains the requirements for nbconvert (basically <a href="http://pypi.python.org/pypi/Markdown/">python-markdown</a>, <a href="http://johnmacfarlane.net/pandoc">pandoc</a>, <a href="http://docutils.svn.sourceforge.net/viewvc/docutils/trunk/docutils/?view=tar">docutils from SVN</a> and <a href="http://pygments.org">pygments</a>).</p>
<p>Once you have nbconvert installed, you can convert your notebook to Blogger-friendly html with:</p>
<pre><code>nbconvert -f blogger-html your_notebook.ipynb
</code></pre>
<p>This will leave two files in your computer, one named <code>your_notebook.html</code> and one named <code>your_noteboook_header.html</code>; it might also create a directory called <code>your_notebook_files</code> if needed for ancillary files.  The first file will contain the body of your post and can be pasted wholesale into the Blogger editing area. The second file contains the CSS and Javascript material needed for the notebook to display correctly, you should only need to use this once to configure your blogger setup (see below):</p>
<pre><code># Only one notebook so far
(master)longs[blog]&gt; ls
120907-Blogging with the IPython Notebook.ipynb  fig/  old/

# Now run the conversion:
(master)longs[blog]&gt; nbconvert.py -f blogger-html 120907-Blogging\ with\ the\ IPython\ Notebook.ipynb

# This creates the header and html body files
(master)longs[blog]&gt; ls
120907-Blogging with the IPython Notebook_header.html  fig/
120907-Blogging with the IPython Notebook.html         old/
120907-Blogging with the IPython Notebook.ipynb
</code></pre>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h2>
  Configuring your Blogger blog to accept notebooks
</h2>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>The notebook uses a lot of custom CSS for formatting input and output, as well as Javascript from <a href="http://www.mathjax.org">MathJax</a> to display mathematical notation.  You will need all this CSS and the Javascript calls in your blog's configuration for your notebook-based posts to display correctly:</p>
<ol>
<li>Once authenticated, go to your blog's overview page by clicking on its title.</li>
<li>Click on templates (left column) and customize using the Advanced options.</li>
<li>Scroll down the middle column until you see an "Add CSS" option.</li>
<li>Copy entire the contents of the <code>_header</code> file into the CSS box.</li>
</ol>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>That's it, and you shouldn't need to do anything else as long as the CSS we use in the notebooks doesn't drastically change.  This customization of your blog needs to be done only once.</p>
<p>While you are at it, I recommend you change the width of your blog so that cells have enough space for clean display; in experimenting I found out that the default template was too narrow to properly display code cells, producing a lot of text wrapping that impaired readability.  I ended up using a layout with a single column for all blog contents, putting the blog archive at the bottom.  Otherwise, if I kept the right sidebar, code cells got too squished in the post area.</p>
<p>I also had problems using some of the fancier templates available from 'Dynamic Views', in that I could never get inline math to render.  But sticking to those from the Simple or 'Picture Window' categories worked fine and they still allow for a lot of customization.</p>
<p><em>Note:</em> if you change blog templates, Blogger does destroy your custom CSS, so you may need to repeat the above steps in that case.</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h2>
  Adding the actual posts

</h2>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>Now, whenever you want to write a new post as a notebook, simply convert the <code>.ipynb</code> file to blogger-html and copy its entire contents to the clipboard. Then go to the 'raw html' view of the post, remove anything Blogger may have put there by default, and paste.  You should also click on the 'options' tab (right hand side) and select both <code>Show HTML literally</code> and <code>Use &lt;br&gt; tag</code>, else your paragraph breaks will look all wrong.</p>
<p>That's it!</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h2>
  What can you put in?
</h2>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>I will now add a few bits of code, plots, math, etc, to show which kinds of content can be put in and work out of the box.  These are mostly bits copied from our <a href="https://github.com/ipython/ipython/tree/master/docs/examples/notebooks">example notebooks</a> so the actual content doesn't matter, I'm just illustrating the <em>kind</em> of content that works.</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [1]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># Let&#39;s initialize pylab so we can plot later</span>
<span class="o">%</span><span class="k">pylab</span> <span class="n">inline</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt"></div>
<div class="output_subarea output_stream output_stdout">
<pre>
Welcome to pylab, a matplotlib-based Python environment [backend: module://IPython.zmq.pylab.backend_inline].
For more information, type &apos;help(pylab)&apos;.
</pre>
</div>
</div>
</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>With pylab loaded, the usual matplotlib operations work</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [2]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">x</span> <span class="o">=</span> <span class="n">linspace</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="o">*</span><span class="n">pi</span><span class="p">)</span>
<span class="n">plot</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">sin</span><span class="p">(</span><span class="n">x</span><span class="p">),</span> <span class="n">label</span><span class="o">=</span><span class="s">r&#39;$\sin(x)$&#39;</span><span class="p">)</span>
<span class="n">plot</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">cos</span><span class="p">(</span><span class="n">x</span><span class="p">),</span> <span class="s">&#39;ro&#39;</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s">r&#39;$\cos(x)$&#39;</span><span class="p">)</span>
<span class="n">title</span><span class="p">(</span><span class="s">r&#39;Two familiar functions&#39;</span><span class="p">)</span>
<span class="n">legend</span><span class="p">()</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt">Out [2]:</div>
<div class="output_subarea output_pyout">
<pre>&lt;matplotlib.legend.Legend at 0x3128610&gt;</pre>
</div>
</div>
<div class="hbox output_area">
<div class="prompt output_prompt"></div>
<div class="output_subarea output_display_data">
<img src="data:image/png;base64,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
"></img>
</div>
</div>
</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>The notebook, thanks to MathJax, has great LaTeX support, so that you can type inline math $(1,\gamma,\ldots, \infty)$ as well as displayed equations:</p>
<p>$$
e^{i \pi}+1=0
$$</p>
<p>but by loading the <a href="http://sympy.org">sympy</a> extension, it's easy showcase math <em>output</em> from Python computations, where we don't type the math expressions in text, and instead the results of code execution are displayed in mathematical format:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [3]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%</span><span class="k">load_ext</span> <span class="n">sympyprinting</span>
<span class="kn">import</span> <span class="nn">sympy</span> <span class="kn">as</span> <span class="nn">sym</span>
<span class="kn">from</span> <span class="nn">sympy</span> <span class="kn">import</span> <span class="o">*</span>
<span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">z</span> <span class="o">=</span> <span class="n">sym</span><span class="o">.</span><span class="n">symbols</span><span class="p">(</span><span class="s">&quot;x y z&quot;</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>From simple algebraic expressions</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [4]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">Rational</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span><span class="mi">2</span><span class="p">)</span><span class="o">*</span><span class="n">pi</span> <span class="o">+</span> <span class="n">exp</span><span class="p">(</span><span class="n">I</span><span class="o">*</span><span class="n">x</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="n">x</span><span class="o">**</span><span class="mi">2</span> <span class="o">+</span> <span class="n">y</span><span class="p">)</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt">Out [4]:</div>
<div class="output_subarea output_pyout">
$$\frac{3}{2} \pi + \frac{e^{\mathbf{\imath} x}}{x^{2} + y}$$
</div>
</div>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [5]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">eq</span> <span class="o">=</span> <span class="p">((</span><span class="n">x</span><span class="o">+</span><span class="n">y</span><span class="p">)</span><span class="o">**</span><span class="mi">2</span> <span class="o">*</span> <span class="p">(</span><span class="n">x</span><span class="o">+</span><span class="mi">1</span><span class="p">))</span>
<span class="n">eq</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt">Out [5]:</div>
<div class="output_subarea output_pyout">
$$\left(x + 1\right) \left(x + y\right)^{2}$$
</div>
</div>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [6]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">expand</span><span class="p">(</span><span class="n">eq</span><span class="p">)</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt">Out [6]:</div>
<div class="output_subarea output_pyout">
$$x^{3} + 2 x^{2} y + x^{2} + x y^{2} + 2 x y + y^{2}$$
</div>
</div>
</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>To calculus</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [7]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">diff</span><span class="p">(</span><span class="n">cos</span><span class="p">(</span><span class="n">x</span><span class="o">**</span><span class="mi">2</span><span class="p">)</span><span class="o">**</span><span class="mi">2</span> <span class="o">/</span> <span class="p">(</span><span class="mi">1</span><span class="o">+</span><span class="n">x</span><span class="p">),</span> <span class="n">x</span><span class="p">)</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt">Out [7]:</div>
<div class="output_subarea output_pyout">
$$- 4 \frac{x \operatorname{sin}\left(x^{2}\right) \operatorname{cos}\left(x^{2}\right)}{x + 1} - \frac{\operatorname{cos}^{2}\left(x^{2}\right)}{\left(x + 1\right)^{2}}$$
</div>
</div>
</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>For more examples of how to use sympy in the notebook, you can see <a href="http://nbviewer.ipython.org/urls/raw.github.com/ipython/ipython/master/docs/examples/notebooks/sympy.ipynb">our example sympy notebook</a> or go to the <a href="http://sympy.org">sympy website</a> for much more documentation.</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h2>
  You can easily include formatted text and code with markdown
</h2>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>You can <em>italicize</em>, <strong>boldface</strong></p>
<ul>
<li>build</li>
<li>lists</li>
</ul>
<p>and embed code meant for illustration instead of execution in Python:</p>
<pre><code>def f(x):
    """a docstring"""
    return x**2
</code></pre>
<p>or other languages:</p>
<pre><code>if (i=0; i&lt;n; i++) {
  printf("hello %d\n", i);
  x += 4;
}
</code></pre>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>And since the notebook can store displayed images in the file itself, you can show images which will be embedded in your post:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [8]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="kn">from</span> <span class="nn">IPython.display</span> <span class="kn">import</span> <span class="n">Image</span>
<span class="n">Image</span><span class="p">(</span><span class="n">filename</span><span class="o">=</span><span class="s">&#39;fig/img_4926.jpg&#39;</span><span class="p">)</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt">Out [8]:</div>
<div class="output_subarea output_pyout">
<img src="data:image/jpeg;base64,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
AAAAADYEAAAqLQAAAAAAAAAAAAAAAAAAkAMAAFYBAAB2AQAAjAAAABoCAADKAAAApAAAAD4AAAD7
DwAA+w8AAAEAAAABAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANMGAADaCwAAAAAAAP//
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAVAAAADQAAAPujFdtgAAIACQABAEAOsApkAGQAEgAAAAAAAAAAAAAA
AAAAAAAAEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAEAAAACAAIA
AgACAAAAAAAAAAAAAAAAAAAAAAAAAIoAAQAAAAQACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKABAAAAABAACAAB
AAEAgALgAQAAAAAAAAAAAAAIAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAACAAAAAAAAAAKAAAA//8AAAAAk/+WminVRrV32VGV5sE8jQgAAAAAAP//AAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKo3ACQBAACAvykA2wAAAEAOAABADgAABAABAAIA
BAAAAFI5OAACAAcABAAAADAxMDABEAMAAQAAAEAOAAACEAMAAQAAALAKAAAAAAAABgADAQMAAQAA
AAYAAAAaAQUAAQAAAEoNAAAbAQUAAQAAAFINAAAoAQMAAQAAAAIAAAABAgQAAQAAAFoNAAACAgQA
AQAAAFUbAAAAAAAAtAAAAAEAAAC0AAAAAQAAAP/Y/+AAEEpGSUYAAQEAAAEAAQAA/9sAQwAIBgYH
BgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04Mjwu
MzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy
MjIyMjIyMjIyMjIyMjIy/8AAEQgAxACTAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAAB
AgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNC
scEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0
dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY
2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//E
ALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoW
JDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWG
h4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp
6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A0MUYp+KMV7x4gzFGKfijFAEeKMVJijFAiPFJipMUYoAj
xSYqTFJigCPFGKfijFMCPFJipCKTFICPFJipCKTFMCIioNQhL6TIImKtH+9kc45AycDsOcc1bxUN
zbi5tpIGYqsi7SR2rCvT54NLc3w9X2c79DHOqyW58qW3kd16shXH4c0VUvNGnju5Es7to7cHCKJj
+J/E5P40VyKvKx1yoRuztsUmKkxRivRPOI8UYqTFJigBmKMU/FJigQzFGKfikxQAzFJipMUmKAI8
VLBbmcuSwVUXczEZ4puKDLOkUsUBUGVGUljgKMHn69h9azquUYNx3NaKi6iU9jK0/VIdSluDCSI4
n2AMuCT3rXjgi+zyT3EoiiUHDHucE1xumW8tre2skb4tpCwjz8w+98w3HryOoxXSXiRXdkULKyn/
AFZ3Y+b1HvXNTqznRbT1R1Towp10pK6Yyyuory2WSOVJOxKkdR147VYxXL6db6hDqVwAsEc5QE7E
Utgt3HGf/wBQrqUVggDsGbHJAxn8K3w9RzgmzDEU1CbUdhuKTFSYpMVsYFSS88pymy4bHdYyR+dF
bSW2niNfOvCshUEqFzjPNFefKvRUmr/gehHD1nFO34jV5FLinBccUuK9A4BmKTFPxRigQzFJin4o
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
"></img>
</div>
</div>
</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>You can embed YouTube videos using the IPython object, this is my recent talk at SciPy'12 about IPython:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [9]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="kn">from</span> <span class="nn">IPython.display</span> <span class="kn">import</span> <span class="n">YouTubeVideo</span>
<span class="n">YouTubeVideo</span><span class="p">(</span><span class="s">&#39;iwVvqwLDsJo&#39;</span><span class="p">)</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt">Out [9]:</div>
<div class="output_subarea output_pyout">

            <iframe
                width="400"
                height="300"
                src="http://www.youtube.com/embed/iwVvqwLDsJo"
                frameborder="0"
                allowfullscreen
            ></iframe>
        
</div>
</div>
</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h2>
  Including code examples from other languages
</h2>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>Using our various script cell magics, it's easy to include code in a variety of other languages</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [10]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%%</span><span class="k">ruby</span>
<span class="n">puts</span> <span class="s">&quot;Hello from Ruby #{RUBY_VERSION}&quot;</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt"></div>
<div class="output_subarea output_stream output_stdout">
<pre>Hello from Ruby 1.8.7
</pre>
</div>
</div>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [11]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%%</span><span class="k">bash</span>
<span class="n">echo</span> <span class="s">&quot;hello from $BASH&quot;</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt"></div>
<div class="output_subarea output_stream output_stdout">
<pre>hello from /bin/bash
</pre>
</div>
</div>
</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>And tools like the Octave and R magics let you interface with entire computational systems directly from the notebook; this is the Octave magic for which <a href="http://nbviewer.ipython.org/urls/raw.github.com/ipython/ipython/d835d46dcc50043971b4a9915398bad1b5d63648/docs/examples/notebooks/octavemagic_extension.ipynb">our example notebook contains more details</a>:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [12]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%</span><span class="k">load_ext</span> <span class="n">octavemagic</span>
</pre></div>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [13]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%%</span><span class="k">octave</span> <span class="o">-</span><span class="n">s</span> <span class="mi">500</span><span class="p">,</span><span class="mi">500</span>

<span class="c"># butterworth filter, order 2, cutoff pi/2 radians</span>
<span class="n">b</span> <span class="o">=</span> <span class="p">[</span><span class="mf">0.292893218813452</span>  <span class="mf">0.585786437626905</span>  <span class="mf">0.292893218813452</span><span class="p">];</span>
<span class="n">a</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1</span>  <span class="mi">0</span>  <span class="mf">0.171572875253810</span><span class="p">];</span>
<span class="n">freqz</span><span class="p">(</span><span class="n">b</span><span class="p">,</span> <span class="n">a</span><span class="p">,</span> <span class="mi">32</span><span class="p">);</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt"></div>
<div class="output_subarea output_display_data">
<img src="data:image/png;base64,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
FaCsDL6+YG8PPJfzQBBeyMN3p7W1VSLekZa1Hb2iZtw4CAqCsLDa6GhoboavvoKICOC8GCVqRs7n
LFmv2JCH4F5WViYR70jL2o5esXnpdJg/H7Zvh7g40NSEHTsgMhJSUoDFEq1XhK2jV+zgmDuCyAAE
ATduwB9/QEcH6OvD3Lkwbpyk+4S8irQFIhxzRxAZgEL5Z2i+qQny8uD4cejshGnTwMMDZ80jbwCD
O4LIGFpasGQJAACbDSUlsHs3NDWBvj4sXgxjx0q6c4jUIA9j7vn5+RLxjrSs7eiVNq+CAtjaQmQk
xMWBlxf8+it89RXEx0NJiWi9wmWkecWGPIy5R0ZG7ty5U/xeucnajl558ra1QU4OkJMM3nsP3NzA
wEAcXoGRGy+OuQsfOp0uEe9Iy9qOXpnwqqnB4sWweDEAAIsFRUVQUQHt7TB+PPj4/PMerNC9AjPS
vGJDHoI7giBvREcHlix5MUBfVQVZWVBVBQQB06aBlxcMtiIfItvIw5j7oAu+i4hz586hF72y4jUx
gaAgiIuDmBjQ0oLvvoOYGNi9G27cgP5+EXoHZaR5xYY83Ll3dHRIxDvSsrajVz68NBq4uoKrKwBA
RwdcugTffAP9/XDz5hgGA2bOBCUlkfoHIq+fs8SRhweq0vYcA0FkkefP4fJl+OsvaG8HbW2YMwem
TMHFbYaAtAUiIf/T1dfXr1u3zs7OTkVFhUKh1NTUcNfm5uZSXmXAMw0Wi7VixQotLS0Gg+Hl5VVZ
WSnc7iEI8jZUVcHNDb78EuLiIDAQbt+GrVshJgYOHYI7dyTdOWToCHlYpqqqKj09ffr06XZ2dgUF
BW88JiEhwfDlqqbKXK/W9fb2enh4sFis+Ph4BoMRGxvr7OxcVlamq6sr3E4iCMIbfX0IDHyx/ewZ
/Pe/kJEBfX1ApcKMGTBrFqioSLR/CD8IN/cHm80mNxITEwGgurqauzYnJwcAbt68+cZzU1NTASA/
P58sPnr0iEqlbtiwYVCpra3tsDotKHKTtR296OXT295O5OQQ27YRGzcSGzcSP/9MPHkiDq8oELpX
2jIxiWrM/dtvvw0NDa2urjY2NubszM3NdXd3v3nzpomJCTluw32Kn5/flStX6urqOHvmzZt39+7d
QSfDSNtQF4KMBNrb4dIluHwZWlpAWRlsbMDeHoyMJN0tySFtgUgCs2UcHBxaW1vpdLqnp+euXbtM
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
3r33339fXV3dxsampKREQ0PD2NgYAFpaWkpLS52cnMjDioqKrK2tyUuoqalpaWmxsbEhqzIzMxcs
WEBuD2ghIyNDWVl5OC0I1oeKigrSK5Sr4L8FgiBIr9A/Sd4t1NTUkF6hf5K8WygsLFRWVhb1v+br
LWRnZysrK4vzG0W2kJ2d3dnZKc5vFNlCdnZ2ZWWlOL9RZAvZ2dnnzp0bUgslJSUPHz58PcKQ25Ja
mP6tEIJy+fLlt7XT1dXl6emprq7+999/c+8fP368p6cn956IiAgKhdLR0TFoLYIgCMI/gt+5W1hY
FBcXv76/p6fnww8/vHjx4h9//DFlypQBp1y9epV7T3l5uYmJiYqKyqC1CIIgCP8IPuaupqbmwAW5
s6+vb9myZXl5eVlZWXZ2dgNO8fX1raurKyoqIot1dXV5eXmcn0W8axEEQRD+EfJ67p988smBAweC
goLc3d05O83MzMhBrt7eXltb26dPn27fvl1VVTU2NrahoaG0tFRPT2/QWgRBEGQICHeUZ8BcRpLg
4GDOAY8fPw4ICNDQ0KDT6R4eHhUVFdyn865FEARB+EQeMjEhCIIgA8BVIREEQeQQDO4IgiByCAZ3
BEEQOQSDO4IgiByCwR1BEEQOweCOIAgih8hwcBdDTj7+FfX19evWrbOzs1NRUaFQKDU1NeLxDprX
UETeixcv+vj4jB07lkaj6enp+fr6Dlg6QkRebvz8/CgUyscffywGb25uLuVVhrNK1FCv9+zZs46O
jgwGQ11d3c7OjvMWt+i8CxcupLzGjBkzRO0FgKKiIldX13feeWf06NHTp08/fvy4YNKheouLi52c
nOh0uqam5rJlyzhZKGQYSU+0F5Cenh5ra2s9Pb0DBw6kp6dbWVnp6Og8fvxYUori4mIdHR1vb28y
2Uh1dbV4vE5OTjY2Nlu3bk1NTY2MjKTT6e+9996zZ89E7T169OiHH364c+fO1NTUuLg4ExMTKpU6
YJ04UXg5ZGZmamlpUanUjz76SADpUL05OTkAkJCQkPGS06dPi8FLEMS+ffsAwN3dPTExMTk5OTg4
+MSJE6L2Xrp0KYOLuLg4AIiKihK19+rVq1Qqddq0aWlpaSdPniRXC09LSxO196+//lJSUpoxY8ax
Y8d+/PFHQ0NDMzOztrY2AbzSg6wG99TUVADIz88ni48ePaJSqRs2bJCUgs1mkxuJiYnDDO5D8t6+
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
Y2RHRMr/A5YdmP24XbLsAAAAAElFTkSuQmCC
"></img>
</div>
</div>
</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>The <a href="http://nbviewer.ipython.org/urls/raw.github.com/ipython/ipython/3607712653c66d63e0d7f13f073bde8c0f209ba8/docs/examples/notebooks/rmagic_extension.ipynb">rmagic extension</a> does a similar job, letting you call R directly from the notebook, passing variables back and forth between Python and R.</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [14]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%</span><span class="k">load_ext</span> <span class="n">rmagic</span> 
</pre></div>

</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>Start by creating some data in Python</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [15]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">X</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">4</span><span class="p">])</span>
<span class="n">Y</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span><span class="mi">3</span><span class="p">,</span><span class="mi">5</span><span class="p">,</span><span class="mi">4</span><span class="p">,</span><span class="mi">6</span><span class="p">,</span><span class="mi">7</span><span class="p">])</span>
</pre></div>

</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>Which can then be manipulated in R, with results available back in Python (in <code>XYcoef</code>):</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [16]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%%</span><span class="k">R</span> <span class="o">-</span><span class="n">i</span> <span class="n">X</span><span class="p">,</span><span class="n">Y</span> <span class="o">-</span><span class="n">o</span> <span class="n">XYcoef</span>
<span class="n">XYlm</span> <span class="o">=</span> <span class="n">lm</span><span class="p">(</span><span class="n">Y</span><span class="o">~</span><span class="n">X</span><span class="p">)</span>
<span class="n">XYcoef</span> <span class="o">=</span> <span class="n">coef</span><span class="p">(</span><span class="n">XYlm</span><span class="p">)</span>
<span class="k">print</span><span class="p">(</span><span class="n">summary</span><span class="p">(</span><span class="n">XYlm</span><span class="p">))</span>
<span class="n">par</span><span class="p">(</span><span class="n">mfrow</span><span class="o">=</span><span class="n">c</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span><span class="mi">2</span><span class="p">))</span>
<span class="n">plot</span><span class="p">(</span><span class="n">XYlm</span><span class="p">)</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt"></div>
<div class="output_subarea output_display_data">
<pre>
Call:
lm(formula = Y ~ X)

Residuals:
   1    2    3    4    5 
-0.2  0.9 -1.0  0.1  0.2 

Coefficients:
            Estimate Std. Error t value Pr(&gt;|t|)  
(Intercept)   3.2000     0.6164   5.191   0.0139 *
X             0.9000     0.2517   3.576   0.0374 *
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1 

Residual standard error: 0.7958 on 3 degrees of freedom
Multiple R-squared:  0.81,	Adjusted R-squared: 0.7467 
F-statistic: 12.79 on 1 and 3 DF,  p-value: 0.03739 

</pre>
</div>
</div>
<div class="hbox output_area">
<div class="prompt output_prompt"></div>
<div class="output_subarea output_display_data">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAIAAADytinCAAAgAElEQVR4nOzdd1gUV9cA8LNLWfrS
pYggqFgQCyqIIIiiKIqg2BAVY4k1SsQSxBJsRIwmQRALVnw1YJSgaCQRCyhGUUEJICJNQHoRkc58
f0yyH8KCsOzsDsv5PXnyDOPsvWfYu4fZO3fuZRAEAQghhOiHKewAEEIIcYcJGiGEaAoTNEII0RQm
aIQQoilM0AghRFOYoBFCiKYwQSOEEE1hgkYIIZrCBI0QQjSFCRohhGgKEzRCCNEUJmiEEKIpTNAI
IURTmKARQoimMEEjhBBNYYJGCCGawgSNEEI0hQkaIYRoChM0QgjRFCZohBCiKUzQCCFEU5igEUKI
pjBBI4QQTWGCRgghmsIEjRBCNIUJGiGEaAoTNEII0RQmaIQQoilM0AghRFOYoBFCiKYwQSOEEE1h
gkYIIZrCBI0QQjSFCRohhGiqJybo3r17M/4jLy9vb2+fl5fX8ZfHxcWNGjWqxc7y8nJFRcVOhREf
H29kZNSpl3yRqqoqoxk5Obnm0YqLizc0NDTfaB8PJ4W6i/z8fAaD8dNPP3H23Lhxw9ramqLquLZ2
giCCg4PNzc0VFBQGDhz4zTfffPjwofVrO3iYSOqJCRoAbt68WVZWVlpa+vz58w8fPmzfvr3jr+3b
t6+3tzd1sXVRVFRU2X9ycnJoHi0SIgaD4e3tnZOTI6wAdu7cuW3btg0bNrx69er06dPp6emjR4/+
9OkTb4eJpB6aoOXl5RUVFZWUlPr37+/q6pqenk7uj46OHjFihKysrJ2dXW5uLgA0NDSsXr1aSUlJ
VVV1z549AJCRkbFz507yeD8/Px0dHR0dndOnT5N7Hj9+bGZm1nr75MmTffv2lZaWNjMze/36dfNg
WlfBYWdnd+LECXLb19d3/vz57Rzc/NQ4ONFOnjy5sbHRwMBg3Lhx5EZVVVXr8+V6UkgkSUpKLl++
/Jtvvmn9T1evXjU0NGSz2bNnzy4qKgKAxMREa2vrvXv3Ghsbp6SkjBs3zsPDQ1VV1cLCIjY2dvTo
0fLy8hs3biRf3k5r50hLS/vxxx8jIyPnzZunq6trbm4eHh6uqKj4448/8nCYyCJ6Hm1t7ejoaHI7
NzfX0dFx3759BEEUFxerqKiEh4eXlpauXbvW2tqaIIiQkBBDQ8OMjIznz5+zWKy0tLSnT5+amJgQ
BPHgwQMlJaX79+/n5OTY2Niw2WyCIGJjY01NTcnCOdvZ2dmSkpL3798vKipyc3NbuXIlQRAvXrwY
MmQI1yo4oR47dszBwYHcNjc3v3btWjsHEwShoqLy9OnT5ns40RIEISYmVl9fz9nger5cTwqJnvfv
37NYrMrKSh0dnfDwcIIgrl+/bmVlRRBEeno6m82OjIwsKSlxc3ObN28eQRCvXr1is9lubm6JiYnJ
yclMJvPixYslJSUmJibq6uqZmZmxsbEAUFhY2H5r5wgKCpo4cWKLqIKCgsh22NnDRJW4sP9ACIed
nZ24uDhBEB8+fDAzM9u6dSv81wc3Y8YMADh06JCKikpjYyMA1NfXFxYWjh49OicnR0FBoaysjCzk
t99++/rrr8ePHw8Ae/bsmTZtWlvVqampvXnzpk+fPlVVVaqqqu/evWtxQIsqOPtnzpy5efPmmpqa
8vLypKQkOzu769evt3UwydraWlz837c1ICBgwIABbUXF9Xw7flJIBMjJyR09enTt2rUTJkzg7Pz9
998dHR1tbW0B4ODBg9ra2uQHobq6OjAwkMVipaSkaGpquri4AMCkSZPKy8t1/1NRUdG7d+/2Wzsp
MzOzT58+LXbq6upmZ2fzcJio6qFdHGfOnImPj09ISHj69GlxcXFwcDAAvHv3LjIyUk9PT09Pb+DA
gZKSkoWFhbNmzfL09Fy5cqWWllZgYCDZUkn5+fkGBgbktr6+futaCIIgN8TFxU+dOjV69OiZM2cm
JSW1OKydKjQ1NY2MjO7duxceHj5z5kwpKal2Dib973//i/+Pg4NDO78Eruf7xZNCIsbBwcHExGT3
7t2cPfn5+Xp6euS2mpqapKQk2cuho6PDYrHI/XJycuSGuLi4hoYGZxu+1No59PT0WifZrKwsAwMD
Pz8/soPu9OnT7RzG4wl3Kz00QWtqapKJadSoUbNnz37x4gW509bWNjMzMzMz8+3bt3/++aeGhkZ6
erqNjU18fPzff/99/fr1oKAgTiFaWlpv374ltzMyMjj7OQMkOLdfQkNDIyIibt++/ddffy1YsKBF
MO1UAQBOTk4RERFhYWHz58//4sFkVHr/4XyK2voltD7ftk4KibCff/751KlTCQkJ5I8aGhpZWVnk
dlFRUW1traqqKvyXf7+o/dbOYWlp+ejRo+TkZPLHs2fPPn36NDAw0N7efv369eXl5eXl5V999VU7
h/F8vt1ID03QzWloaJDfwuzt7aOjo2/evFlcXLxt27aNGzcyGIzw8PAFCxYUFBQ0NjbW1tZKS0tz
Xujs7Hz8+PHo6Oi8vLydO3cyGAwAYLPZCQkJ8fHxJSUl/v7+5JElJSVycnLS0tKFhYV+fn7V1dXN
A2inCgBwdHS8du1aQkLCxIkTv3jwF338+JGzwfV8uZ4UEm19+vTZuXPnvn37yB9nzJhx9erVO3fu
lJWVeXh4ODk5dTA1k9pv7Rz9+/f/9ttvJ0+eHBoampWVVVlZaWZmVlRUtHbtWh4OE1nC7gQXguY3
CQmCiIiIUFdXr6ioIAji9u3bQ4YMkZGRmTBhwtu3bwmCqKysdHR0lJWVVVZWXrVqVV1dXfPbbn5+
fr1799bW1j59+rS2tjZBEE1NTevXr5eTkxs6dGhoaCh5k7C8vNzW1lZZWdnc3Pz69eu9evU6f/48
57ZJ6ypaBDx48OCvv/6a3G7/4PZvEs6dO1deXv7jx4+cjdbny/WkkOghbxJyfqyvrx82bBh5k5Ag
iCtXrgwYMEBeXt7R0bGgoIAgiFevXhkaGpL/mpyczNnevn37rl27yG0DA4M3b96039qba2pqOn/+
vKmpqaysrJaW1oYNG0xNTQ8cOMDbYSKJQfzXT4oQQsL16dOn9PT0Lz7A1cHDRAAmaIQQoinsg0YI
IZrCBI0QQjRFuwdVCgsLw8LChB0FEhwmkzl37tzWT9yIBmzPPQ1/2zO1Cbqurk5SUrJTL7l161ZC
QgJ1s2ohugkLC9PR0ZkyZYqwA/kygiDIGf46PvoQ23NPw9/2TEmCTkpK2rJlS2xsrIyMTGVlpYWF
xeHDh9t55riFUaNGzZkzh4rAEA2lpaUJO4QvWLNmTUBAQHx8/Lx585hMJpPJDAoK4kyD9UXYnnsU
/rZnShL06tWr9+zZY2pqymKxampq4uLi1q1bFxkZSUVdCFHtyZMnALB9+/bQ0FBjY+O8vDwXF5d7
9+4JOy4k+ihJ0Ewm09LSkvwaKCUlZWFh0aknkRCiIWlpaWNjYwDQ0tJqPQUKQlSgJG+amJhMnTp1
7Nixenp6WVlZjx8/Jls2Qt1Renq6k5NTdnZ2cHCwq6vrwYMHtbS0hB0U6hEoSdC+vr7R0dExMTEJ
CQnKysqenp7jxo2joiKEBKCoqCgzMzM1NVVZWRkAJCQkOKsoIEQpShI0g8EYP348OacwQt2dmJiY
gYEBZ35Ld3f3to6sq6t79epV8z1paWmamprUxodEl4C6hnV1dTkTGDaXlJS0YcOG5nvevn07ceLE
pUuXCiYwhHjQVnt+9+5daGho8z23b9/u16/fmjVrBBUaEikCStBRUVFc9w8ePPjPP/9svmfFihVN
TU0CCQohHrXVng0MDHx8fJrvKSkpwfaMeCagR717yPIHqIfA9owEA0e/cREVFfXkyRNjY+OpU6cy
GIz4+HgfHx8FBQUrK6uFCxcKOzqEkHC0SAXv3r17+vSpkpKStbU1RUtbUJKgDx061Hqnh4cHFXXx
nbe3d1ZWlrOzc2RkZEREhL+/f1xc3C+//KKiojJr1ixM0D1Qt27PiI+ap4I+ffp4eXk5OzvHxsYG
BASEhIRQkaMp6eJQUlLy9PSUkJCQaoaKiviuqanp9u3bp06dmmpicuTIkdTU1A8fPixfvpzJZHp4
eKxatUrYAaJOKy0tff36dX5+/v79+1NTU3koofu2Z8RfzVPBgQMHrly5sn79el9fX21t7djYWCpq
pOQKetmyZZcuXVq7dm23e4CwsbFRWlqa8c8/MGYMvHnDZrNramoyMzPPnj27detWzurFqBtZtmyZ
m5vbrVu3DAwMVq5cycMj2t23PSP+evnyJScV/PDDD+RaugDQu3dvcuFzvqPqJuFff/3VHVuzhISE
lrp64ezZH7/7Lnnr1k+fPqmrq//888/Z2dkeHh67du0SdoCo0+rr6x0cHLKysjZv3szzgIpu2p4R
fzVPBVZWVr6+vk1NTZmZmdeuXaPoWTxscy0FGRvfLS/3f/TI79WrS4mJABAUFCTsoBDvxMTEvLy8
xowZEx0dXVFRIexwUDfWPBXU19fv27fP1tZWTk7ul19+4VxN8xcm6M+9fSvx11+TIyMnM5mwbh2k
pECHZ5VE9OTj43P79m03N7eQkBD8W4v4RUJCYvfu3VTXggm6GYKAtWvhyBFgMgEAFi+Gs2cxQXdf
Xl5enG1yJEZ2dvaoUaOEFxFCnYMJupngYDAxgaFD//1xzBhwd4faWmCxhBoW4tHw4cOFHQJCXYIJ
+j+FhXD8ONy589nOGTPg+nVwdhZSTKhLnFu9cXFxcUKJBCHeYIL+z6ZNsG9fy4vlRYtg7VpM0N1a
aGjohQsXmpqaCILIyspKTEwUdkQIdZSA5uKgu+vXQUoKrKxa7tfWhtpayM8XRkyIP44fP75t2zYt
La1NmzbZ29sLOxyEOgETNMDHj3DgAHB7nBcAYOFCuHxZsAEhfmIymebm5iwWy8bGhv4L1CLUHCZo
gJ074dtvgc3m/q+zZsHVq4INCPGTlJRUSEhIXV2dv79/VVWVsMNBqBN6fIKOjYWsrPZ6mWVkwMAA
Xr4UYEyIny5fvjxy5Mjdu3cXFBTgs6Coe+nZNwnr62HrVvj11y8ctmQJnD/fZh8IojcZGZl+/foB
gLe3t7BjQahzenaCPnQI5s+HLy4ZZ2UF330HDQ2AszF0Q82fTJGRkXnw4IEQg0GoU6jNOARBlJeX
KyoqUjSbdZckJ8OdOxAZ+eUjGQywtYXISJg2jfqwEJ/FxMQAQENDw507d548eUJpXS9fvty0aVPz
PcnJySYmJpRWikQYJQl6zZo1AQEB8fHx8+bNYzKZTCYzKCjIjFbPTBMEbNwI/v7/PtX9RYsXw44d
mKC7I87czTNnzjx9+jSldRkbG+Mam4iPKEnQ5HXK9u3bQ0NDjY2N8/LyXFxceJiHl0JBQWBuDoaG
HT2+Xz8oLITyclBUpDIsxH+cVVwLCwtxFAfqXijs4pCWljY2NgYALS2txsZG6irqtNxcOHMG7t7t
3KvmzoWQEFi5kpqYEFV69+5NbvTp02fz5s3CDQahTqEkQaenpzs5OWVnZwcHB7u6uh48eFBLS4uK
ini0aRMcPgySkp171fz54OyMCbrbcXV1FXYICPGIkgRdVFSUmZmZmpqqrKwMABISEidOnKCiIl6E
hYGqKpiadvqFbDaoqMDr153oGEFCZWRkBAC1tbVlZWUsFqu2trZ///4UrR2HEBUoeVBFTEzMwMBg
6tSppqamAODu7s5u6zk9ASsvhwMH4MABHl++aBFcvMjXgBCFEhMTExMTzczMwsLCsrKyrl27ZmBg
IOygEOoEAQ3s1dXVzcrKar0/Ly/vxo0bzfekpKRoa2tTFcf27bBrF8jL8/jyKVNg717YvbujYz8Q
DeTn51tYWACApaUlPkmIuhcBJeioqCiu+yUlJZWUlJrvYbFYTIrSX0wMlJR0aaicuDiYm0N0NJd5
7xBdMZnMwMBAKyurqKgoaWlpYYeDUCdQm6Dr6uokJSUBoK2vlqqqqnPmzGm+JzIykpJxozU1sGUL
H6Y9WroUDh/GBN2NXLhw4YcffoiIiBg8ePC5c+eEHQ5CnUDJtWpSUtL06dNVVFQMDAwUFRWnT5+e
mppKRUWd8MMPsGwZaGh0tRwjI0hNhY8f+RETotbevXsBICAgQF5e3sTERFpa+ujRo8IOCqFOoOQK
evXq1Xv27DE1NWWxWDU1NXFxcevWrYvsyEPVFPnnH3jyBHbu5E9ps2dDWBjg4C3aGzBgAPw3lgMh
ShEEceHChUmTJvG3WEquoJlMpqWlJYvFAgApKSkLCwtxIU4z1NQE69bBTz8Bv+YDWbgQLl3iT1GI
SnPnzgUAGxuboUOHWlhYpKamkk9OIcRHt2/fTkxMZDAYixcv5vsDH5TkTRMTk6lTp44dO1ZPTy8r
K+vx48fC/GAEBsLkydC/P98KVFcHcXF49w50dPhWJqLMsmXL3Nzcbt26ZWBgsHLlyq5MOUDryb+Q
YMXGxtbW1lpbW0+ZMoW6Wii5gvb19fX09JSQkEhISGAymZ6engd4HnrcRTk5EBICfH/A19UVB0R3
F/X19Q4ODllZWZs3b+bt/vOaNWsAID4+fuDAgebm5kZGRo8fP+Z3mKh7ePv2bVhYGACMHTvW2tqa
6uoouYJmMBjjx48fP348FYV3ztq14OvL/3mcZ8yAiRNh2zY+F4soICYm5uXlNWbMmOjo6IqKCh5K
6AaTfyGKlZaWXr9+feHChQYGBoJ83InLFXRpaenr16/z8/P3798v/NEXXXHlChgYwOjR/C9ZSgqM
jeHpU/6XjPjNx8dHTU3N3d09OTk5KCiI53LoO/kXokxDQ8OlS5eKi4uVlJRcXV0Ffy+NS4JetmxZ
SkrK7t27JSQkVnbfuYHKyuDIEdi7l6ryFy8GHFTbHQwaNGjjxo1kY26+ukrHkZN/ZWRkBAcHAwDt
Jv9CFLh582ZaWpq4uLizs7OqqiqDwRATExN8GFz+IJB9doGBgYGBgdevXxd8TPyxZQvs2AEyMlSV
P3YsbNoEtbXAYlFVBeKHBw8eLF26VF1d3d7eftCgQbNnz+5sCbSe/Avx1fPnz+vq6szMzKysrGRl
ZQFAQkJCiPFwuYLuep+d8N25AzU1YGdHbS329nDzJrVVoC7bvn37o0ePDA0N169ff4inlX/pO/kX
4pOMjAxyOgpDQ8MxY8YAAJmdhY7LFbSPj8/t27fd3NxCQkK60mcnNNXVsHMnhIdTXtGiRbBxIzg5
UV4R6oLGxkZ1dXUAYLPZ/PrUtTX5V1pamq+vb/M9MTExgwcP5kuliO9KS0tjYmJmzJihpqZGdlvR
JC9zfJagvby8ONvktUZ2djZv3XbCtHcvrFoFKiqUV9SnD3z6BEVFoKZGeV0ioba2Njk5WU1NjcIJ
C1sZOHDgmjVrsrOzvby8+NV33NbkX1paWi1u2xQWFsrJyfGlUsQvdXV1UVFRlpaWMjIyVlZWDAaD
tu/RZwl6+PDhwoqDb168gIQE2LdPQNUtWACXL8P69QKqrjv7559/VqxYYWpqmpmZaWBgwFtvAw82
bNjw999/S0hIaGlp7dixoytFfXHyLxkZmRZreKuqquKisXxXXl4eEBDw7t27iRMnzp49u4PPDREE
ERsb27dvX1VV1WHDhpEXy5w1henpswTt7Ozc4p/j4uIEGEyXNTXB5s1w7JjganRygpkzMUF3xI4d
O86dO9e/f38AWLRo0YsXL0aMGCGAel1dXZ8/f96VWz1JSUlbtmyJjY2VkZGprKy0sLA4fPgwOdEH
Erz6+npHR8evv/7aycnpl19+yczM9PDwaP8laWlpTU1NAwYM6NWrl5qamri4uKampmCi7SIufdCh
oaEXLlxoamoiCCIrKysxMVHwYfHo2DGYNImfT3V/kYICaGtDSgoMHCi4SruLujrIzIS0NHjzBt68
2XbvXv+5c0FGBqKiTExMMjIyBJOgR48ebWFhYW1tTebovZ0feUm7yb96thcvXowcOXLBggUA4O/v
b2Vl1VaCfv/+fWFh4bBhw8TFxTU0NKDtrz60xSVBHz9+3Nvb++zZs/Pnz799+7bgY+JRejqEhEAb
nYMUWroUzpyBH34QdL208uEDvHkD//wDSUmQng6ZmdDUBEpKoK//73+TJl1qbMyxtZ01a9anT59+
//13gU3N7ODg4ODg0JUSyMm/yO/Rwp/8q8djMpnt9xpVVVUlJSWNHj26oaGBvNuhp6cnoOD4jUs7
YzKZ5ubmly5dsrGx8ff3F3xMPNq4Efz8QPCDySdMAC8vaGwUQtVC0SIXZ2VBY+O/uXjwYJg0CfT1
QVu79fDwPb6+69at8/f3b2xs3Lx5c58+fQQTr6OjYxdLoNfkXz3e8OHDt2zZcu7cuQEDBpw5c4az
4kd9fX1CQsKwYcM+ffrUq1cvANDp/tOZcUnQUlJSISEhdXV1/v7+VVVVgo+JFxcvwuDBIJSPDZMJ
Njbw119A5aRWfJeRkfH999/n5eWZmZl999133NeCqqiAtLT/z8XZ2dDQAJqaMGQIeVEM+vrQuzdI
SnakRjk5ubNnz/L3LATD19c3Ojo6JiYmISFBWVnZ09Nz3Lhxwg6q5xIXF79+/frJkycvXbrk5OQ0
derU1NTUXr16MZlMCQkJcXFxNREaVcUlQV++fDkvL8/S0vLYsWNdXGSTc9ebWkVF4OcHd+9SXlFb
liyB77/vRgm6trZ24cKFAQEBQ4YMuXDhgoeHh//+/fDq1b+JOD0d3r8HKan/76Mgc7GODgj1qSph
odHkXwgAAGRlZTdu3JibmyshIdHY2FhRUaGnpycpKTls2DBhh8ZnXBK0jIxMv379AMDb25u3QgV9
1/u77+D770GI64EOGAC5uVBZyft64YKVmJhoamo6fOBA8PD4KiVl5N9/Q1oa6OtDv34wdiwsWgQG
BkDv4Ueox6qsrCwrK+vTp09OTs6AAQPExMRGUzEhGj1wSdDNn0yRkZF58OBBZwsV6F3vu3ehrk74
V6+zZ8Nvv4Gbm5DD6Bg2m/3+/XvYuxcGDqzZs2fdtGkx3ehucIeRi13V1taWlZWxWKza2tr+/fvH
xsYKOy7Ei9ra2vz8fF1d3czMTCUlJQAgn7wXbVzm4oiJiYmJibl3796OHTssLS15KVRgS159/Ajb
t4OfHyWFd0q3msK/X79+gz59SgwJ+R+b7ezism7dOmFHRInExMTExEQzM7OwsLCsrKxr1651u1FW
iCCI7OxsgiDevXtXXl4OAEOHDu3du7ew4xIQ7jcJyY2ZM2eePn2ah0IFd9d7927YsAHoMHONkhIo
KsLbt9AtUkB9/a6yspjdu6urqw8dOjRQpAdx5+fnW1hYAIClpWUX76mgDkpNTb148SKLxVqyZAnP
j/UXFBQoKyuXlZVlZ2fr6OiQ/a49DffJksiNwsJC3kZxCOiud1wcZGSAoJ4Y/rLFiyE4GLpFCvjp
J5gzx8LFxULYgQgAk8kMDAy0srKKioriPlgF8dXLly/XrFnj7e1dU1Mze/bskJCQTg2pJHOOuLj4
kydPJk2apK6uTs511TNxSdCcrw99+vTZzNNqfh2/693Y2NhiVrDKykpylAxBEHV1dSwWi/vGp0+s
b78lLl2qq61t8xgBb0ydShw4ULd1K0tKihbxtLXx5g0rMpL44w+a/OpYFE+ofeHChR9++CEiImLw
4MECezqmJwsKCvrpp5/IW1n19fWXLl3aunXrF19VV1dXW1srLy8fHR1tYmKipqY2Y8YM6oOlOy59
0K7/cXFx4dcT67q6ulz3p6SkbPvckydPjIyMmpqaqqqqyCfouW/cutU0b14Vm93eMQLeYDKrbG3T
Hj+mSzxcNz5+TPvrr6bDh6uqq2kRT1UV1U+sqKur//jjj5cvX/7hhx9UVVUprQsBQGNjI2fmE3IY
XDsHEwRRWVkJAA8fPnz//j0A2NnZidJA5q4imhkyZMiQIUP69eunoqKipaWloqJiZmZG8ENaWloH
j1y+fPlXX331hYPevCEmTSIaG7saFt89f04sXy7sINp15gzh5SXsID6zf//+P/74g7ry79+/r6+v
b2ZmtmfPnitXrlBXEVcdas+i5eHDh9bW1s+ePXv06JGpqWlqairXw6qrqwmCiI+Pf/jwoWADpBZ/
2/NnV9B8v+tdV1dHbvDz7jlBwLp14OcHTC6X/0I2YgSkpMCnT8KOow0FBRAUBM1m/e4Jur6iCuoU
c3PzQ4cOnT9//urVq+fPn+//+eRltbW1BEFkZmaS426HDRtmbm4upEi7AS45jrzrLS4ubmlpmZeX
x0OhSUlJ06dPV1FRMTAwUFRUnD59Oj9XBz97FkxN6Tt73MyZ8Pvvwg6iDZs2wcGDPW0RRSpWVEHt
MzEx+emnn3x9fTmPpxEE0dTUVFFRcfny5bq6Oj09vS7OYNVDcEnQ5F3v5ORkf39/3u56r169esuW
LXl5ee/evcvPz9+2bRvfRtoWFMDp07B9O39Ko8KiRXDpkrCD4CY8HOTkYOxYYcchaFSsqII6pamp
6eLFi8XFxWw2e8mSJVTfFhYlXEZxdP2uN4XTM7q7g69vB2fnEY5evYAgICcHaDWWvrISfHzgjz+E
HYcQBAYGnj17li8rqnzRp0+fHj161HxPbm5uT77l9fvvv/fv33/w4MGurq7CjqVb+ixv7t2718vL
KyAgQF5enly55+jRo7t37+5soVQ9qPL778Bmg5kZH4qi1MKFcOkS8DRCkSpeXuDpCQoKwo5DCC5f
vrxs2TIxMTEAOHfu3JIlS6irq6Cg4NmzZ833FBcX98B+lb///ruhoWHcuHEzZ84Udizd22cJmuww
Imcw6ApKHlSprIQffuge14COjjBxIo0S9MOHkJcH06cLOw7h2Lx582+//RYcHCwvL3/9+nVKE3Tf
vn1bjPklRxNSVyOtpKSkJCcnOzk59YRZMgTjswQ9d+5cALCxsSkqKmKz2adPn269SmFH8HF6xvr6
+qioqOrq6ikREdLbt3ePa0ApKRgyBJ4/h5ZmtB0AACAASURBVJEjhR0KQF0dfPcdhIQIOw6hsbS0
XLJkiZ2d3eXLl4Udi2gqLi7+448/XFxcBg4cKNrTBggel5uEy5YtS0lJ2b17t4SERIs15AWstrZ2
2rRpDx8+rLt79/G1a8n6+kIMpnOWLAGaPLT2ww/g6goaGsKOQ5hmzJhx9OjRWbNm8XM0UY9XV1d3
7ty58vJyVVVVV1dXJg2HvXZ/XH6n9fX1Dg4OWVlZmzdvFu63s/DwcFtbW28vr7kvXmiEhvr6+jY2
Nt69e3c9/VfRHjcOnj2D+nohh5GUBLGxsGKFkMMQqvnz5wPAiBEjwsLCut59hwDgxo0b6enpkpKS
CxcuVFRUFHY4oozL4AoxMTEvL68xY8ZER0dXVFQIPiaO4uJiHR0dKCuDbds0R4woPnKkoKDg6dOn
9UJPfB0xcSJERoK9vdACIAjYtAkOHQIGQ2gxCBV505t8/IrcQ+GqET3Ao0ePJCQkRo8ePWXKFPJh
blw8l2pcrqB9fHzU1NTc3d2Tk5ODgoIEHxPHxIkTg4KCCgDqJk3y9vaePn26lpaWcHtdOuGrr0C4
S/AdPw4WFjBkiDBjECrOTe/mhB1U95OWlnbnzh0AGD58ODkFkkSPXPlMKLj8ARw0aNCgQYOqqqqE
ngoHDBjg6enp5uZWV1fn4OCwont9VdfVhYoKKC4GoUzQk5MDly/DX38JoWraIG9683ajGxUWFj56
9MjR0bF37959+/YFABkZGWEH1eNwSdAPHjxYunSpurq6vb39oEGDZs+eLfiwOGxsbGxsbIQYQJfM
nw+//gpr1wqh6rVrwdcXevY3UFzyigc1NTWRkZG2trYKCgq2trbQbAUPJHhcujhoPrmMoqJiYGCg
sKPoGGdn+O03IdT722+grw+iu5JmB+GSVx1HEMSdO3fev38vLi4+fvx4aWlpKSmpHviIDd1wSdA4
uQzfKCiAlhYkJwu00rIyOHwY9u0TaKU01vXJv0Tbq1evUlJSGAzGwIEDe/XqJS4ujgMz6INLgsbJ
Zfhp8WK4cEGgNW7dCjt2AHYX/qfrk39xEARRVlZGEAS/YhOirKws8ql0VVVVcrk/bW1tHMtMN1ze
j8DAwBEjRhgZGWlpaZ08eVLwMYmUSZPg7l1od1EJfrpzBz59Ajs7AVXXHXh6er5582bLli3Z2dm8
Tf61Zs0aAIiPjx84cKC5ubmRkdHjx4/5HaaAlJeXP3z4EAAkJSXJmZo1NTVxtBxtffbGlJeXX7x4
sV+/fitWrHj16lVqaurmzZt/+eUXnksnCKK8vFxRUZHRU4fiApMJVlZw9y5MmkR5XdXVsHMnhIdT
XlG3sm7duufPn3dlZNiTJ08AYPv27aGhocbGxnl5eS4uLvfu3eNbiNSrra199uzZmDFjGhsb9fX1
c3JyUlJS9PT0FBQUAKCxsfHBgwdXr1718/MTdqToMy3n4mCz2devXz9z5kxGRsaYMWPaWkuwfWvW
rAkICIiPj583bx6TyWQymUFBQWb0n4WOIkuWwP79gkjQe/fC11+DigrlFXUro0ePtrCwsLa2JnP0
3r17eStHWlqanJRRS0ur/XX26IMgiISEBD09PTExMVVVVXFxcRUVlStXrhw/ftzKyiogIMDMzGzL
li3d6fmvHuazBJ2fnx8ZGVlbW9unT5+srCyeh9eIwBUHPw0aBO/eQWUlyMtTWMuLF5CQgPcGW3Nw
cOji4h3p6elOTk7Z2dnBwcGurq4HDx6k/72ZzMxMFoulpqbGZDJlZWUlJCTk/2t+hw8fjoqKkpKS
IgjCxsZm1apV5PNf27ZtE27MqLXPErSysjIAsFisQYMGdX3wY3e84qAKOd7OzY2q8hsbYdMmOHOG
qvK7M0dHR852XFwcDyUUFRVlZmampqaSHxAJCYkTJ07wLT6+Kikp+fjxo66ubmlp6YABA8TFxVtM
xd7U1CQpKUl+uhkMRt++fQsKChS6xSSRPRIlNwe64xUHtVxcwMWFwgTt5wf29sBTf5TICw0NvXDh
QlNTE0EQWVlZnHk5Ok5MTMzAwIAzhtrd3Z3fMXZVTU1Nbm6ugYEBZwGXkW1MdctkMhUVFe/du2dt
bf369eukpCT9bjRJZM/zWYJ+8uQJOZ1rdnY2Z17XlJSUzhbaja44BERZGWRkICMD+vblf+Hp6XDt
GkRF8b9kkXD8+HFvb++zZ8/Onz//9u3bfClTV1c3KyuLL0V1RWNjY2Zmpr6+fl5eHvkltSNLFx0/
fnzTpk3e3t4KCgpnz54l15rpTs9/9SSfJejs7Gy+FEr/Kw4hWLwYLl4ELy/+l7xxI/j5gZgY/0sW
CUwm09zc/NKlSzY2Nv7+/nwpM0rYfw7z8vJUVVVLS0sLCgoMDAw6dRXcq1ev4OBg6mJDfPRZglal
bFofmlxxCJO9PRw8CNu383nyz4sXYcgQ4MuSjyJKSkoqJCSkrq7O39+/qqqqK0XV1dVJSkoCQFuP
jCclJW3YsKH5nuTk5NH8e+a+tLSUxWIxmcykpKTx48draGho9OylGESegAaot3XF8c8//2zcuLH5
nuTkZHJKQ1EjIQGjRkFsLJib863MwkI4dgzu3OFbgaLo8uXLeXl5lpaWx44d27VrFw8lJCUlbdmy
JTY2VkZGprKy0sLC4vDhw1ynlh48ePCff/7ZfM+KFSu6vupFbW1tdXU1m81+/PixmZmZsrLyJAGM
2kQ0QG2C/uIVx5AhQ6ho0DS1eDGcOsXPBL15M+zbBywW3woURTIyMuSjzN7e3ryVsHr16j179pia
mrJYrJqamri4uHXr1kVGRvI1TC4aGxsrKysVFRWfPHmio6OjqKg4bdo0qitFtELJo/dJSUnTp09X
UVExMDBQVFScPn06rgUHADBqFPzzD1RX86e027dBQgKsrPhTmigiZ+jv37+/qqqqtra2qqrq2LFj
eSiHyWRaWlqyWCwAkJKSIqde4newn/nw4QMAxMfHp6WlAYClpaWenh6lNSJ6oqSdCeuKoxuYPh2u
X4e5c7tazseP4O0NN2/yIyaRRY6oW7Ro0ddff21mZhYbG3v8+HEeyjExMZk6derYsWP19PSysrIe
P37ckcESPPj06ZOMjExmZuabN29sbW1NTEyoqAV1I5RcQQv+iqPbWLQILl7kQzm7dsHGjcBm86Eo
Udf16UZ9fX09PT0lJCQSEhKYTKanp+eBAwf4GGFDQ0NjY2N5efnvv/9eX1+vp6dHzpSPECV5U2BX
HN2PlhY0NEB+PnTl5ntsLGRmwo8/8i8sUUZON2plZRUVFcXbdKMMBmP8+PHjx48HAA8PDwsLC74E
Rj47AwBXr16dNGmSsrLyggUL+FIyEhmUXEFTfcXRvS1cCP/7H+8vr6+HrVsBZx3rsAsXLnRxutHm
cnJyuh4S+VBJeHh4enq6mJjY3LlzyUe6EGqBkitoiq44RISTE9jawrff8vjyQ4dg/nzo4Y/Od4a6
uvqP/Pu2MX369C6W8OjRIwAwNzdvPkkIQlxR3jXMlysOkSItDYaGEB8Pw4d3+rUpKXDnDuDt1s7w
8/Nrfm+Qh7k4mnN1deXthUlJSenp6dOnTzfn4zhLJOooT9Bdv+IQQUuWwPnznU7QBAEbN4K/P+C6
RJ0RGhp6//59FeFNk62mptbU1DR48ODBgwcLKwbUTVH+Uef5ikOUWVpCbCx0dn70oCAYOxYMDamJ
SWTp6+sLt4e3qKgI1/pDvMHRb8LAYMDkyXD7NnT860VuLpw5A3fvUhmWaGpqaho1atSECRPIsZ4+
Pj7CjgihjsIELSRubrBtWycS9KZNcPgwSEpSGZNomtv1x4IQEhJM0ELSty+UlkJZGSgpffngsDBQ
VQVTU+rDEkHN74LwtqIKQsKCCVp45s6FX3+FVau+cFh5ORw4AH/9JZCYRFDXV1RBSFjw3oXwzJsH
oaFfPmz7dti1i9oFZ0Xa8ePHt23bpqWltWnTJnt7e2GHg1AnYIIWHgUFUFeH9lcUi4mB0lLASSa7
gFxRhcVi2djYkJPDIdRdYIIWqsWLoZ3Fh2pqYPNm+OknAQYkgvi4ogpCAoYJWqgmT4a//oK2Fijw
8YEVK6BXL8HGJGouX748cuTI3bt3FxQU8LaiCkLCIqAVVRB3YmJgaQn378OECS3/6Z9/4OlTwITS
ZREREXPmzAEAb2/vixcv8jZnfwelpKQcOXKk+Z6YmJhBgwZRVyMSbZQk6I6v4YbAzQ18fVsm6MZG
+OYbOHWKzyvM9jAhISEhISFPnz799ddfAYAgiNevXy9cuJC6GvX19bdu3dp8T0VFhZSUFHU1ItGG
K6oI25AhkJ4OHz+CnNz/7zx2DCZPhr59hReWKLCxsTE2Nj5y5Ii7uzu5pxfF/UWSkpL6+vrN98jL
y4vsGpuIepQkaHJFFQaDAbiiSkfMng3XrsGiRf/++O4dXLmCA5+7TlVVVVVVlZzK7sOHDwRBsHEN
GtStUHKTkFxR5fvvvz937py3t/e0adNwRZX2uLh8NoX/unXw88+Af9K67NmzZ6NGjSotLb13756h
oeHw4cPDwsKEHRRCnUBJFvD19Y2Ojo6JiUlISFBWVvb09Bw3bhwVFYkINTWQkoLsbOjTB379FQYM
gGHDhB2TKFi/fv3FixeVlZX37NkTERFhYGBgY2OD0+SjboTyFVVQRyQOH548c+bDIUP2JSTI/v23
sMMREUwm09DQsLq6urS0dOTIkQAgISEh7KAQ6gQBjYPW1dUVTEXd0YMHDzxjY2cwGLuqqrYzmUmZ
mcKOSER8/PixqakpMjJy9OjRAFBfX48JGnUvAurojIqK4ro/Nzc3+PNH6V6+fNm3B4xeiI6O9vf3
l5WVdXFx+e233/YfOiR19KhUZaXdDz9cvXoVl97gizlz5owYMaKoqCgiIiI1NXXjxo04FwfqXgSU
oA0MDLjul5OTMzExab7n/fv3Ojo6AglKmF69enXy5MnCwsKjR49KSUlVVVXB/v0gJfXpjz9YLJaw
oxMRnp6eU6dOVVNT09HRSUxMXLRoEc4NjboXIQ8VYLPZkyZNar4nNze3J4wbXbNmTVxc3IoVK3x8
fHR0dFasWPHtt9/W1dX9/PPP165dE3Z0IoLBYJBdzwBgZGRkZGQk3HgQ6ixKEvShQ4da7/Tw8KCi
rm4qJCRk1qxZDx8+dHFxCQsLu3jx4q+//iopKRkeHq6uri7s6BBCtEBJglZSUlq9erWvr6+YmBgV
5YsASUlJV1dXZWVl8sljPT29Fo8IIxoiCKK8vFxRUZGBj+AjgaAkQS9btuzSpUtr167FBwjb4ujo
iANyu4s1a9YEBATEx8fPmzePyWQymcygoCAzMzNhx4VEH1UJ9C98UhmJiidPngDA9u3bQ0NDjY2N
8/LyXFxc7t27x0NR9fX1UVFR1dXV48aNU1NTaz6YZ+LEiXyOG3V/lI+Dxq5nJBqkpaXJGQu0tLQa
Gxt5KKG2ttbOzi46OjojI8Pe3j45OZkczOPp6Xnjxg1+x4tEAeUJOicnh+oqEKJUenq6k5NTRkYG
OWb/4MGDWlpaPJQTHh4+ZcqUvXv3uru7BwUF+fr6rlmz5vXr187OznZ2dvyOGokCyvuImy96j1B3
VFRUlJmZmZqaqqysDAASEhInTpzgrRzOGH8dHZ2ioqLmg3mmTJnCz6CRSKA8Qbu6ulJdBUKUEhMT
MzAw4DxsxZldurMmTpy4du1aOzs7BQWFffv2TZ8+vcVgHoRawFEWCHWarq5uVlZWZ19laGjo6enp
4uJSV1fn4OCwcuVKBoOBg3lQOzBBI9Rpbc0tU1FR0WLloIyMDA0NDc6PNjY2NjY21AaHRAgdE3Rc
XJxc8/WfOiY9PT0rK6sr67+VlJSoqKjw/PLi4mJVVVWeX15VVSUmJtat4x8yZIimpmZnX5iYmMh5
ILu7aGtumfLy8vT09OZ7yIlWQkNDO1X+P//8U1paSuljBF18u7+o6+35i6g+hZqaGl1d3RZrmH0R
f9szgyAIfpXFFzk5OTdv3uThhdevX//w4UOfPn14q7e6uvrZs2cWFha8vRwA/vzzT1tbW55f/vr1
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
"></img>
</div>
</div>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [17]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">XYcoef</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt">Out [17]:</div>
<div class="output_subarea output_pyout">
<pre>[ 3.2  0.9]</pre>
</div>
</div>
</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>And finally, in the same spirit, the <a href="http://nbviewer.ipython.org/urls/raw.github.com/ipython/ipython/3607712653c66d63e0d7f13f073bde8c0f209ba8/docs/examples/notebooks/cython_extension.ipynb">cython magic extension</a> lets you call Cython code directly from the notebook:</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [18]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%</span><span class="k">load_ext</span> <span class="n">cythonmagic</span>
</pre></div>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">In [19]:</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%%</span><span class="k">cython</span> <span class="o">-</span><span class="n">lm</span>
<span class="kn">from</span> <span class="nn">libc.math</span> <span class="nn">cimport</span> <span class="nn">sin</span>
<span class="k">print</span> <span class="s">&#39;sin(1)=&#39;</span><span class="p">,</span> <span class="n">sin</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
</pre></div>

</div>
</div>
<div class="vbox output_wrapper">
<div class="output vbox">
<div class="hbox output_area">
<div class="prompt output_prompt"></div>
<div class="output_subarea output_stream output_stdout">
<pre>sin(1)= 0.841470984808
</pre>
</div>
</div>
</div>
</div>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h2>
  Keep in mind, this is still experimental code!
</h2>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>Hopefully this post shows that the system is already useful to communicate technical content in blog form with a minimal amount of effort.  But please note that we're still in heavy development of many of these features, so things are susceptible to changing in the near future.  By all means join the <a href="http://mail.scipy.org/mailman/listinfo/ipython-dev">IPython dev mailing list</a> if you'd like to participate and help us make IPython a better tool!</p>
</div></blockquote>
<p>Damián.</p>
