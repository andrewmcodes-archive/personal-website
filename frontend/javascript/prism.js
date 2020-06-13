/* PrismJS 1.20.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+crystal+docker+erb+git+graphql+haml+liquid+markdown+markup-templating+ruby+scss+yaml&plugins=line-numbers */
var _self =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function (u) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i,
      n = 0,
      C = {
        manual: u.Prism && u.Prism.manual,
        disableWorkerMessageHandler:
          u.Prism && u.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof _
              ? new _(n.type, e(n.content), n.alias)
              : Array.isArray(n)
              ? n.map(e)
              : n
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ')
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1)
          },
          objId: function (e) {
            return (
              e.__id || Object.defineProperty(e, '__id', { value: ++n }), e.__id
            )
          },
          clone: function t(e, r) {
            var a,
              n,
              l = C.util.type(e)
            switch (((r = r || {}), l)) {
              case 'Object':
                if (((n = C.util.objId(e)), r[n])) return r[n]
                for (var i in ((a = {}), (r[n] = a), e))
                  e.hasOwnProperty(i) && (a[i] = t(e[i], r))
                return a
              case 'Array':
                return (
                  (n = C.util.objId(e)),
                  r[n]
                    ? r[n]
                    : ((a = []),
                      (r[n] = a),
                      e.forEach(function (e, n) {
                        a[n] = t(e, r)
                      }),
                      a)
                )
              default:
                return e
            }
          },
          getLanguage: function (e) {
            for (; e && !c.test(e.className); ) e = e.parentElement
            return e
              ? (e.className.match(c) || [, 'none'])[1].toLowerCase()
              : 'none'
          },
          currentScript: function () {
            if ('undefined' == typeof document) return null
            if ('currentScript' in document) return document.currentScript
            try {
              throw new Error()
            } catch (e) {
              var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1]
              if (n) {
                var t = document.getElementsByTagName('script')
                for (var r in t) if (t[r].src == n) return t[r]
              }
              return null
            }
          }
        },
        languages: {
          extend: function (e, n) {
            var t = C.util.clone(C.languages[e])
            for (var r in n) t[r] = n[r]
            return t
          },
          insertBefore: function (t, e, n, r) {
            var a = (r = r || C.languages)[t],
              l = {}
            for (var i in a)
              if (a.hasOwnProperty(i)) {
                if (i == e)
                  for (var o in n) n.hasOwnProperty(o) && (l[o] = n[o])
                n.hasOwnProperty(i) || (l[i] = a[i])
              }
            var s = r[t]
            return (
              (r[t] = l),
              C.languages.DFS(C.languages, function (e, n) {
                n === s && e != t && (this[e] = l)
              }),
              l
            )
          },
          DFS: function e(n, t, r, a) {
            a = a || {}
            var l = C.util.objId
            for (var i in n)
              if (n.hasOwnProperty(i)) {
                t.call(n, i, n[i], r || i)
                var o = n[i],
                  s = C.util.type(o)
                'Object' !== s || a[l(o)]
                  ? 'Array' !== s || a[l(o)] || ((a[l(o)] = !0), e(o, t, i, a))
                  : ((a[l(o)] = !0), e(o, t, null, a))
              }
          }
        },
        plugins: {},
        highlightAll: function (e, n) {
          C.highlightAllUnder(document, e, n)
        },
        highlightAllUnder: function (e, n, t) {
          var r = {
            callback: t,
            container: e,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          }
          C.hooks.run('before-highlightall', r),
            (r.elements = Array.prototype.slice.apply(
              r.container.querySelectorAll(r.selector)
            )),
            C.hooks.run('before-all-elements-highlight', r)
          for (var a, l = 0; (a = r.elements[l++]); )
            C.highlightElement(a, !0 === n, r.callback)
        },
        highlightElement: function (e, n, t) {
          var r = C.util.getLanguage(e),
            a = C.languages[r]
          e.className =
            e.className.replace(c, '').replace(/\s+/g, ' ') + ' language-' + r
          var l = e.parentNode
          l &&
            'pre' === l.nodeName.toLowerCase() &&
            (l.className =
              l.className.replace(c, '').replace(/\s+/g, ' ') +
              ' language-' +
              r)
          var i = { element: e, language: r, grammar: a, code: e.textContent }
          function o(e) {
            ;(i.highlightedCode = e),
              C.hooks.run('before-insert', i),
              (i.element.innerHTML = i.highlightedCode),
              C.hooks.run('after-highlight', i),
              C.hooks.run('complete', i),
              t && t.call(i.element)
          }
          if ((C.hooks.run('before-sanity-check', i), !i.code))
            return C.hooks.run('complete', i), void (t && t.call(i.element))
          if ((C.hooks.run('before-highlight', i), i.grammar))
            if (n && u.Worker) {
              var s = new Worker(C.filename)
              ;(s.onmessage = function (e) {
                o(e.data)
              }),
                s.postMessage(
                  JSON.stringify({
                    language: i.language,
                    code: i.code,
                    immediateClose: !0
                  })
                )
            } else o(C.highlight(i.code, i.grammar, i.language))
          else o(C.util.encode(i.code))
        },
        highlight: function (e, n, t) {
          var r = { code: e, grammar: n, language: t }
          return (
            C.hooks.run('before-tokenize', r),
            (r.tokens = C.tokenize(r.code, r.grammar)),
            C.hooks.run('after-tokenize', r),
            _.stringify(C.util.encode(r.tokens), r.language)
          )
        },
        tokenize: function (e, n) {
          var t = n.rest
          if (t) {
            for (var r in t) n[r] = t[r]
            delete n.rest
          }
          var a = new l()
          return (
            M(a, a.head, e),
            (function e(n, t, r, a, l, i, o) {
              for (var s in r)
                if (r.hasOwnProperty(s) && r[s]) {
                  var u = r[s]
                  u = Array.isArray(u) ? u : [u]
                  for (var c = 0; c < u.length; ++c) {
                    if (o && o == s + ',' + c) return
                    var g = u[c],
                      f = g.inside,
                      h = !!g.lookbehind,
                      d = !!g.greedy,
                      v = 0,
                      p = g.alias
                    if (d && !g.pattern.global) {
                      var m = g.pattern.toString().match(/[imsuy]*$/)[0]
                      g.pattern = RegExp(g.pattern.source, m + 'g')
                    }
                    g = g.pattern || g
                    for (
                      var y = a.next, k = l;
                      y !== t.tail;
                      k += y.value.length, y = y.next
                    ) {
                      var b = y.value
                      if (t.length > n.length) return
                      if (!(b instanceof _)) {
                        var x = 1
                        if (d && y != t.tail.prev) {
                          g.lastIndex = k
                          var w = g.exec(n)
                          if (!w) break
                          var A = w.index + (h && w[1] ? w[1].length : 0),
                            P = w.index + w[0].length,
                            S = k
                          for (S += y.value.length; S <= A; )
                            (y = y.next), (S += y.value.length)
                          if (
                            ((S -= y.value.length),
                            (k = S),
                            y.value instanceof _)
                          )
                            continue
                          for (
                            var O = y;
                            O !== t.tail &&
                            (S < P ||
                              ('string' == typeof O.value &&
                                !O.prev.value.greedy));
                            O = O.next
                          )
                            x++, (S += O.value.length)
                          x--, (b = n.slice(k, S)), (w.index -= k)
                        } else {
                          g.lastIndex = 0
                          var w = g.exec(b)
                        }
                        if (w) {
                          h && (v = w[1] ? w[1].length : 0)
                          var A = w.index + v,
                            w = w[0].slice(v),
                            P = A + w.length,
                            E = b.slice(0, A),
                            N = b.slice(P),
                            j = y.prev
                          E && ((j = M(t, j, E)), (k += E.length)), W(t, j, x)
                          var L = new _(s, f ? C.tokenize(w, f) : w, p, w, d)
                          if (
                            ((y = M(t, j, L)),
                            N && M(t, y, N),
                            1 < x && e(n, t, r, y.prev, k, !0, s + ',' + c),
                            i)
                          )
                            break
                        } else if (i) break
                      }
                    }
                  }
                }
            })(e, a, n, a.head, 0),
            (function (e) {
              var n = [],
                t = e.head.next
              for (; t !== e.tail; ) n.push(t.value), (t = t.next)
              return n
            })(a)
          )
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var t = C.hooks.all
            ;(t[e] = t[e] || []), t[e].push(n)
          },
          run: function (e, n) {
            var t = C.hooks.all[e]
            if (t && t.length) for (var r, a = 0; (r = t[a++]); ) r(n)
          }
        },
        Token: _
      }
    function _(e, n, t, r, a) {
      ;(this.type = e),
        (this.content = n),
        (this.alias = t),
        (this.length = 0 | (r || '').length),
        (this.greedy = !!a)
    }
    function l() {
      var e = { value: null, prev: null, next: null },
        n = { value: null, prev: e, next: null }
      ;(e.next = n), (this.head = e), (this.tail = n), (this.length = 0)
    }
    function M(e, n, t) {
      var r = n.next,
        a = { value: t, prev: n, next: r }
      return (n.next = a), (r.prev = a), e.length++, a
    }
    function W(e, n, t) {
      for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next
      ;((n.next = r).prev = n), (e.length -= a)
    }
    if (
      ((u.Prism = C),
      (_.stringify = function n(e, t) {
        if ('string' == typeof e) return e
        if (Array.isArray(e)) {
          var r = ''
          return (
            e.forEach(function (e) {
              r += n(e, t)
            }),
            r
          )
        }
        var a = {
            type: e.type,
            content: n(e.content, t),
            tag: 'span',
            classes: ['token', e.type],
            attributes: {},
            language: t
          },
          l = e.alias
        l &&
          (Array.isArray(l)
            ? Array.prototype.push.apply(a.classes, l)
            : a.classes.push(l)),
          C.hooks.run('wrap', a)
        var i = ''
        for (var o in a.attributes)
          i +=
            ' ' +
            o +
            '="' +
            (a.attributes[o] || '').replace(/"/g, '&quot;') +
            '"'
        return (
          '<' +
          a.tag +
          ' class="' +
          a.classes.join(' ') +
          '"' +
          i +
          '>' +
          a.content +
          '</' +
          a.tag +
          '>'
        )
      }),
      !u.document)
    )
      return (
        u.addEventListener &&
          (C.disableWorkerMessageHandler ||
            u.addEventListener(
              'message',
              function (e) {
                var n = JSON.parse(e.data),
                  t = n.language,
                  r = n.code,
                  a = n.immediateClose
                u.postMessage(C.highlight(r, C.languages[t], t)), a && u.close()
              },
              !1
            )),
        C
      )
    var e = C.util.currentScript()
    function t() {
      C.manual || C.highlightAll()
    }
    if (
      (e &&
        ((C.filename = e.src),
        e.hasAttribute('data-manual') && (C.manual = !0)),
      !C.manual)
    ) {
      var r = document.readyState
      'loading' === r || ('interactive' === r && e && e.defer)
        ? document.addEventListener('DOMContentLoaded', t)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(t)
        : window.setTimeout(t, 16)
    }
    return C
  })(_self)
'undefined' != typeof module && module.exports && (module.exports = Prism),
  'undefined' != typeof global && (global.Prism = Prism)
;(Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      'internal-subset': {
        pattern: /(\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/,
      name: /[^\s<>'"]+/
    }
  },
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
        }
      },
      punctuation: /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: { namespace: /^[^\s>\/:]+:/ }
      }
    }
  },
  entity: [
    { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
    /&#x?[\da-f]{1,8};/i
  ]
}),
  (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
    Prism.languages.markup.entity),
  (Prism.languages.markup.doctype.inside['internal-subset'].inside =
    Prism.languages.markup),
  Prism.hooks.add('wrap', function (a) {
    'entity' === a.type &&
      (a.attributes.title = a.content.replace(/&amp;/, '&'))
  }),
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    value: function (a, e) {
      var s = {}
      ;(s['language-' + e] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[e]
      }),
        (s.cdata = /^<!\[CDATA\[|\]\]>$/i)
      var n = {
        'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s }
      }
      n['language-' + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] }
      var t = {}
      ;(t[a] = {
        pattern: RegExp(
          '(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)'.replace(
            /__/g,
            function () {
              return a
            }
          ),
          'i'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: n
      }),
        Prism.languages.insertBefore('markup', 'cdata', t)
    }
  }),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup),
  (Prism.languages.xml = Prism.languages.extend('markup', {})),
  (Prism.languages.ssml = Prism.languages.xml),
  (Prism.languages.atom = Prism.languages.xml),
  (Prism.languages.rss = Prism.languages.xml)
!(function (s) {
  var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
  ;(s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
          lookbehind: !0,
          alias: 'selector'
        }
      }
    },
    url: {
      pattern: RegExp('url\\((?:' + e.source + '|[^\n\r()]*)\\)', 'i'),
      greedy: !0,
      inside: { function: /^url/i, punctuation: /^\(|\)$/ }
    },
    selector: RegExp('[^{}\\s](?:[^{};"\']|' + e.source + ')*?(?=\\s*\\{)'),
    string: { pattern: e, greedy: !0 },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/
  }),
    (s.languages.css.atrule.inside.rest = s.languages.css)
  var t = s.languages.markup
  t &&
    (t.tag.addInlined('style', 'css'),
    s.languages.insertBefore(
      'inside',
      'attr-value',
      {
        'style-attr': {
          pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
          inside: {
            'attr-name': { pattern: /^\s*style/i, inside: t.tag.inside },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            'attr-value': { pattern: /.+/i, inside: s.languages.css }
          },
          alias: 'language-css'
        }
      },
      t.tag
    ))
})(Prism)
Prism.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  'class-name': {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
}
;(Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [
    Prism.languages.clike['class-name'],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: !0
    }
  ],
  keyword: [
    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }
  ],
  number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
})),
  (Prism.languages.javascript[
    'class-name'
  ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0
    },
    'function-variable': {
      pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
      alias: 'function'
    },
    parameter: [
      {
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      },
      {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }),
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: !0,
      inside: {
        'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: !0,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\${|}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  }),
  Prism.languages.markup &&
    Prism.languages.markup.tag.addInlined('script', 'javascript'),
  (Prism.languages.js = Prism.languages.javascript)
!(function (e) {
  var t =
      '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
    n = {
      environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
      variable: [
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: !0,
          inside: {
            variable: [
              { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
              /^\$\(\(/
            ],
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
            operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
            punctuation: /\(\(?|\)\)?|,|;/
          }
        },
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: !0,
          inside: { variable: /^\$\(|^`|\)$|`$/ }
        },
        {
          pattern: /\$\{[^}]+\}/,
          greedy: !0,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp('(\\{)' + t),
              lookbehind: !0,
              alias: 'constant'
            }
          }
        },
        /\$(?:\w+|[#?*!@$])/
      ],
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
    }
  e.languages.bash = {
    shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
    comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
    'function-name': [
      {
        pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: 'function'
      },
      { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: 'function' }
    ],
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: !0
    },
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
          lookbehind: !0,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: !0
    },
    string: [
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: n
      },
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,
        lookbehind: !0,
        greedy: !0,
        inside: n
      }
    ],
    environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
    variable: n.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
      lookbehind: !0,
      alias: 'class-name'
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
    operator: {
      pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
      inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 }
  }
  for (
    var a = [
        'comment',
        'function-name',
        'for-or-select',
        'assign-left',
        'string',
        'environment',
        'function',
        'keyword',
        'builtin',
        'boolean',
        'file-descriptor',
        'operator',
        'punctuation',
        'number'
      ],
      r = n.variable[1].inside,
      s = 0;
    s < a.length;
    s++
  )
    r[a[s]] = e.languages.bash[a[s]]
  e.languages.shell = e.languages.bash
})(Prism)
!(function (e) {
  e.languages.ruby = e.languages.extend('clike', {
    comment: [/#.*/, { pattern: /^=begin\s[\s\S]*?^=end/m, greedy: !0 }],
    'class-name': {
      pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ }
    },
    keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/
  })
  var n = {
    pattern: /#\{[^}]+\}/,
    inside: {
      delimiter: { pattern: /^#\{|\}$/, alias: 'tag' },
      rest: e.languages.ruby
    }
  }
  delete e.languages.ruby.function,
    e.languages.insertBefore('ruby', 'keyword', {
      regex: [
        {
          pattern: RegExp(
            '%r(?:' +
              [
                '([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1[gim]{0,3}',
                '\\((?:[^()\\\\]|\\\\[^])*\\)[gim]{0,3}',
                '\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}[gim]{0,3}',
                '\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\][gim]{0,3}',
                '<(?:[^<>\\\\]|\\\\[^])*>[gim]{0,3}'
              ].join('|') +
              ')'
          ),
          greedy: !0,
          inside: { interpolation: n }
        },
        {
          pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
      symbol: { pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/, lookbehind: !0 },
      'method-definition': {
        pattern: /(\bdef\s+)[\w.]+/,
        lookbehind: !0,
        inside: { function: /\w+$/, rest: e.languages.ruby }
      }
    }),
    e.languages.insertBefore('ruby', 'number', {
      builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
      constant: /\b[A-Z]\w*(?:[?!]|\b)/
    }),
    (e.languages.ruby.string = [
      {
        pattern: RegExp(
          '%[qQiIwWxs]?(?:' +
            [
              '([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1',
              '\\((?:[^()\\\\]|\\\\[^])*\\)',
              '\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}',
              '\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]',
              '<(?:[^<>\\\\]|\\\\[^])*>'
            ].join('|') +
            ')'
        ),
        greedy: !0,
        inside: { interpolation: n }
      },
      {
        pattern: /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
        inside: { interpolation: n }
      }
    ]),
    (e.languages.rb = e.languages.ruby)
})(Prism)
!(function (e) {
  ;(e.languages.crystal = e.languages.extend('ruby', {
    keyword: [
      /\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/,
      { pattern: /(\.\s*)(?:is_a|responds_to)\?/, lookbehind: !0 }
    ],
    number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/
  })),
    e.languages.insertBefore('crystal', 'string', {
      attribute: {
        pattern: /@\[.+?\]/,
        alias: 'attr-name',
        inside: {
          delimiter: { pattern: /^@\[|\]$/, alias: 'tag' },
          rest: e.languages.crystal
        }
      },
      expansion: [
        {
          pattern: /\{\{.+?\}\}/,
          inside: {
            delimiter: { pattern: /^\{\{|\}\}$/, alias: 'tag' },
            rest: e.languages.crystal
          }
        },
        {
          pattern: /\{%.+?%\}/,
          inside: {
            delimiter: { pattern: /^\{%|%\}$/, alias: 'tag' },
            rest: e.languages.crystal
          }
        }
      ]
    })
})(Prism)
;(Prism.languages.docker = {
  keyword: {
    pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
    lookbehind: !0
  },
  string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
  comment: /#.*/,
  punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
}),
  (Prism.languages.dockerfile = Prism.languages.docker)
!(function (h) {
  function v(e, n) {
    return '___' + e.toUpperCase() + n + '___'
  }
  Object.defineProperties((h.languages['markup-templating'] = {}), {
    buildPlaceholders: {
      value: function (a, r, e, o) {
        if (a.language === r) {
          var c = (a.tokenStack = [])
          ;(a.code = a.code.replace(e, function (e) {
            if ('function' == typeof o && !o(e)) return e
            for (var n, t = c.length; -1 !== a.code.indexOf((n = v(r, t))); )
              ++t
            return (c[t] = e), n
          })),
            (a.grammar = h.languages.markup)
        }
      }
    },
    tokenizePlaceholders: {
      value: function (p, k) {
        if (p.language === k && p.tokenStack) {
          p.grammar = h.languages[k]
          var m = 0,
            d = Object.keys(p.tokenStack)
          !(function e(n) {
            for (var t = 0; t < n.length && !(m >= d.length); t++) {
              var a = n[t]
              if (
                'string' == typeof a ||
                (a.content && 'string' == typeof a.content)
              ) {
                var r = d[m],
                  o = p.tokenStack[r],
                  c = 'string' == typeof a ? a : a.content,
                  i = v(k, r),
                  u = c.indexOf(i)
                if (-1 < u) {
                  ++m
                  var g = c.substring(0, u),
                    l = new h.Token(
                      k,
                      h.tokenize(o, p.grammar),
                      'language-' + k,
                      o
                    ),
                    s = c.substring(u + i.length),
                    f = []
                  g && f.push.apply(f, e([g])),
                    f.push(l),
                    s && f.push.apply(f, e([s])),
                    'string' == typeof a
                      ? n.splice.apply(n, [t, 1].concat(f))
                      : (a.content = f)
                }
              } else a.content && e(a.content)
            }
            return n
          })(p.tokens)
        }
      }
    }
  })
})(Prism)
!(function (n) {
  ;(n.languages.erb = n.languages.extend('ruby', {})),
    n.languages.insertBefore('erb', 'comment', {
      delimiter: { pattern: /^<%=?|%>$/, alias: 'punctuation' }
    }),
    n.hooks.add('before-tokenize', function (e) {
      n.languages['markup-templating'].buildPlaceholders(
        e,
        'erb',
        /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm
      )
    }),
    n.hooks.add('after-tokenize', function (e) {
      n.languages['markup-templating'].tokenizePlaceholders(e, 'erb')
    })
})(Prism)
Prism.languages.git = {
  comment: /^#.*/m,
  deleted: /^[-–].*/m,
  inserted: /^\+.*/m,
  string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
  command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/m } },
  coord: /^@@.*@@$/m,
  commit_sha1: /^commit \w{40}$/m
}
Prism.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: !0,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: !0,
        inside: Prism.languages.markdown
      }
    }
  },
  string: {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: !0
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:true|false)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
  'attr-name': {
    pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: !0
  },
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
    lookbehind: !0
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: 'function'
  },
  keyword: /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
  operator: /[!=|]|\.{3}/,
  punctuation: /[!(){}\[\]:=,]/,
  constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
}
!(function (e) {
  e.languages.haml = {
    'multiline-comment': {
      pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ]+.+)*/,
      lookbehind: !0,
      alias: 'comment'
    },
    'multiline-code': [
      {
        pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ]+.+)/,
        lookbehind: !0,
        inside: e.languages.ruby
      },
      {
        pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
        lookbehind: !0,
        inside: e.languages.ruby
      }
    ],
    filter: {
      pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
      lookbehind: !0,
      inside: { 'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' } }
    },
    markup: {
      pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
      lookbehind: !0,
      inside: e.languages.markup
    },
    doctype: { pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/, lookbehind: !0 },
    tag: {
      pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
      lookbehind: !0,
      inside: {
        attributes: [
          {
            pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
            lookbehind: !0,
            inside: e.languages.ruby
          },
          {
            pattern: /\([^)]+\)/,
            inside: {
              'attr-value': {
                pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                lookbehind: !0
              },
              'attr-name': /[\w:-]+(?=\s*!?=|\s*[,)])/,
              punctuation: /[=(),]/
            }
          },
          { pattern: /\[[^\]]+\]/, inside: e.languages.ruby }
        ],
        punctuation: /[<>]/
      }
    },
    code: {
      pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
      lookbehind: !0,
      inside: e.languages.ruby
    },
    interpolation: {
      pattern: /#\{[^}]+\}/,
      inside: {
        delimiter: { pattern: /^#\{|\}$/, alias: 'punctuation' },
        rest: e.languages.ruby
      }
    },
    punctuation: { pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/, lookbehind: !0 }
  }
  for (
    var t = [
        'css',
        { filter: 'coffee', language: 'coffeescript' },
        'erb',
        'javascript',
        'less',
        'markdown',
        'ruby',
        'scss',
        'textile'
      ],
      n = {},
      r = 0,
      a = t.length;
    r < a;
    r++
  ) {
    var i = t[r]
    ;(i = 'string' == typeof i ? { filter: i, language: i } : i),
      e.languages[i.language] &&
        (n['filter-' + i.filter] = {
          pattern: RegExp(
            '((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+'.replace(
              '{{filter_name}}',
              function () {
                return i.filter
              }
            )
          ),
          lookbehind: !0,
          inside: {
            'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' },
            rest: e.languages[i.language]
          }
        })
  }
  e.languages.insertBefore('haml', 'filter', n)
})(Prism)
Prism.languages.liquid = {
  keyword: /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow)\b/,
  number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
  operator: {
    pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
    lookbehind: !0
  },
  function: {
    pattern: /(^|[\s;|&])(?:append|prepend|capitalize|cycle|cols|increment|decrement|abs|at_least|at_most|ceil|compact|concat|date|default|divided_by|downcase|escape|escape_once|first|floor|join|last|lstrip|map|minus|modulo|newline_to_br|plus|remove|remove_first|replace|replace_first|reverse|round|rstrip|size|slice|sort|sort_natural|split|strip|strip_html|strip_newlines|times|truncate|truncatewords|uniq|upcase|url_decode|url_encode|include|paginate)(?=$|[\s;|&])/,
    lookbehind: !0
  }
}
!(function (d) {
  function n(n, e) {
    return (
      (n = n.replace(/<inner>/g, function () {
        return '(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))'
      })),
      e && (n = n + '|' + n.replace(/_/g, '\\*')),
      RegExp('((?:^|[^\\\\])(?:\\\\{2})*)(?:' + n + ')')
    )
  }
  var e = '(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+',
    t = '\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|$)'.replace(/__/g, function () {
      return e
    }),
    a = '\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)'
  ;(d.languages.markdown = d.languages.extend('markup', {})),
    d.languages.insertBefore('markdown', 'prolog', {
      blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
      table: {
        pattern: RegExp('^' + t + a + '(?:' + t + ')*', 'm'),
        inside: {
          'table-data-rows': {
            pattern: RegExp('^(' + t + a + ')(?:' + t + ')*$'),
            lookbehind: !0,
            inside: {
              'table-data': {
                pattern: RegExp(e),
                inside: d.languages.markdown
              },
              punctuation: /\|/
            }
          },
          'table-line': {
            pattern: RegExp('^(' + t + ')' + a + '$'),
            lookbehind: !0,
            inside: { punctuation: /\||:?-{3,}:?/ }
          },
          'table-header-row': {
            pattern: RegExp('^' + t + '$'),
            inside: {
              'table-header': {
                pattern: RegExp(e),
                alias: 'important',
                inside: d.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [
        {
          pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: !0,
          alias: 'keyword'
        },
        { pattern: /``.+?``|`[^`\r\n]+`/, alias: 'keyword' },
        {
          pattern: /^```[\s\S]*?^```$/m,
          greedy: !0,
          inside: {
            'code-block': {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: !0
            },
            'code-language': { pattern: /^(```).+/, lookbehind: !0 },
            punctuation: /```/
          }
        }
      ],
      title: [
        {
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: 'important',
          inside: { punctuation: /==+$|--+$/ }
        },
        {
          pattern: /(^\s*)#+.+/m,
          lookbehind: !0,
          alias: 'important',
          inside: { punctuation: /^#+|#+$/ }
        }
      ],
      hr: {
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: 'punctuation'
      },
      list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: 'punctuation'
      },
      'url-reference': {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: 'url'
      },
      bold: {
        pattern: n('__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__', !0),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: !0,
            inside: {}
          },
          punctuation: /\*\*|__/
        }
      },
      italic: {
        pattern: n('_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_', !0),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
          punctuation: /[*_]/
        }
      },
      strike: {
        pattern: n('(~~?)(?:(?!~)<inner>)+?\\2', !1),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: {}
          },
          punctuation: /~~?/
        }
      },
      url: {
        pattern: n(
          '!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])',
          !1
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          variable: { pattern: /(\[)[^\]]+(?=\]$)/, lookbehind: !0 },
          content: {
            pattern: /(^!?\[)[^\]]+(?=\])/,
            lookbehind: !0,
            inside: {}
          },
          string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ }
        }
      }
    }),
    ['url', 'bold', 'italic', 'strike'].forEach(function (e) {
      ;['url', 'bold', 'italic', 'strike'].forEach(function (n) {
        e !== n &&
          (d.languages.markdown[e].inside.content.inside[n] =
            d.languages.markdown[n])
      })
    }),
    d.hooks.add('after-tokenize', function (n) {
      ;('markdown' !== n.language && 'md' !== n.language) ||
        !(function n(e) {
          if (e && 'string' != typeof e)
            for (var t = 0, a = e.length; t < a; t++) {
              var i = e[t]
              if ('code' === i.type) {
                var r = i.content[1],
                  o = i.content[3]
                if (
                  r &&
                  o &&
                  'code-language' === r.type &&
                  'code-block' === o.type &&
                  'string' == typeof r.content
                ) {
                  var l = r.content
                      .replace(/\b#/g, 'sharp')
                      .replace(/\b\+\+/g, 'pp'),
                    s =
                      'language-' +
                      (l = (/[a-z][\w-]*/i.exec(l) || [''])[0].toLowerCase())
                  o.alias
                    ? 'string' == typeof o.alias
                      ? (o.alias = [o.alias, s])
                      : o.alias.push(s)
                    : (o.alias = [s])
                }
              } else n(i.content)
            }
        })(n.tokens)
    }),
    d.hooks.add('wrap', function (n) {
      if ('code-block' === n.type) {
        for (var e = '', t = 0, a = n.classes.length; t < a; t++) {
          var i = n.classes[t],
            r = /language-(.+)/.exec(i)
          if (r) {
            e = r[1]
            break
          }
        }
        var o = d.languages[e]
        if (o) {
          var l = n.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&')
          n.content = d.highlight(l, o, e)
        } else if (e && 'none' !== e && d.plugins.autoloader) {
          var s =
            'md-' +
            new Date().valueOf() +
            '-' +
            Math.floor(1e16 * Math.random())
          ;(n.attributes.id = s),
            d.plugins.autoloader.loadLanguages(e, function () {
              var n = document.getElementById(s)
              n && (n.innerHTML = d.highlight(n.textContent, d.languages[e], e))
            })
        }
      }
    }),
    (d.languages.md = d.languages.markdown)
})(Prism)
;(Prism.languages.scss = Prism.languages.extend('css', {
  comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
  atrule: {
    pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
    inside: { rule: /@[\w-]+/ }
  },
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
    inside: {
      parent: { pattern: /&/, alias: 'important' },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  property: {
    pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }
  }
})),
  Prism.languages.insertBefore('scss', 'atrule', {
    keyword: [
      /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
      { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }
    ]
  }),
  Prism.languages.insertBefore('scss', 'important', {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
  }),
  Prism.languages.insertBefore('scss', 'function', {
    placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
    statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
    boolean: /\b(?:true|false)\b/,
    null: { pattern: /\bnull\b/, alias: 'keyword' },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
      lookbehind: !0
    }
  }),
  (Prism.languages.scss.atrule.inside.rest = Prism.languages.scss)
!(function (n) {
  var t = /[*&][^\s[\]{},]+/,
    e = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
    r =
      '(?:' +
      e.source +
      '(?:[ \t]+' +
      t.source +
      ')?|' +
      t.source +
      '(?:[ \t]+' +
      e.source +
      ')?)'
  function a(n, t) {
    t = (t || '').replace(/m/g, '') + 'm'
    var e = '([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|\\s*#))'
      .replace(/<<prop>>/g, function () {
        return r
      })
      .replace(/<<value>>/g, function () {
        return n
      })
    return RegExp(e, t)
  }
  ;(n.languages.yaml = {
    scalar: {
      pattern: RegExp(
        '([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\\2[^\r\n]+)*)'.replace(
          /<<prop>>/g,
          function () {
            return r
          }
        )
      ),
      lookbehind: !0,
      alias: 'string'
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(
        '((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)[^\r\n{[\\]},#\\s]+?(?=\\s*:\\s)'.replace(
          /<<prop>>/g,
          function () {
            return r
          }
        )
      ),
      lookbehind: !0,
      alias: 'atrule'
    },
    directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
    datetime: {
      pattern: a(
        '\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?)?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?'
      ),
      lookbehind: !0,
      alias: 'number'
    },
    boolean: {
      pattern: a('true|false', 'i'),
      lookbehind: !0,
      alias: 'important'
    },
    null: { pattern: a('null|~', 'i'), lookbehind: !0, alias: 'important' },
    string: {
      pattern: a('("|\')(?:(?!\\2)[^\\\\\r\n]|\\\\.)*\\2'),
      lookbehind: !0,
      greedy: !0
    },
    number: {
      pattern: a(
        '[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+\\.?\\d*|\\.?\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)',
        'i'
      ),
      lookbehind: !0
    },
    tag: e,
    important: t,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
  }),
    (n.languages.yml = n.languages.yaml)
})(Prism)
!(function () {
  if ('undefined' != typeof self && self.Prism && self.document) {
    var l = 'line-numbers',
      c = /\n(?!$)/g,
      m = function (e) {
        var t = a(e)['white-space']
        if ('pre-wrap' === t || 'pre-line' === t) {
          var n = e.querySelector('code'),
            r = e.querySelector('.line-numbers-rows')
          if (!n || !r) return
          var s = e.querySelector('.line-numbers-sizer'),
            i = n.textContent.split(c)
          s ||
            (((s = document.createElement('span')).className =
              'line-numbers-sizer'),
            n.appendChild(s)),
            (s.style.display = 'block'),
            i.forEach(function (e, t) {
              s.textContent = e || '\n'
              var n = s.getBoundingClientRect().height
              r.children[t].style.height = n + 'px'
            }),
            (s.textContent = ''),
            (s.style.display = 'none')
        }
      },
      a = function (e) {
        return e
          ? window.getComputedStyle
            ? getComputedStyle(e)
            : e.currentStyle || null
          : null
      }
    window.addEventListener('resize', function () {
      Array.prototype.forEach.call(document.querySelectorAll('pre.' + l), m)
    }),
      Prism.hooks.add('complete', function (e) {
        if (e.code) {
          var t = e.element,
            n = t.parentNode
          if (
            n &&
            /pre/i.test(n.nodeName) &&
            !t.querySelector('.line-numbers-rows')
          ) {
            for (
              var r = !1, s = /(?:^|\s)line-numbers(?:\s|$)/, i = t;
              i;
              i = i.parentNode
            )
              if (s.test(i.className)) {
                r = !0
                break
              }
            if (r) {
              ;(t.className = t.className.replace(s, ' ')),
                s.test(n.className) || (n.className += ' line-numbers')
              var l,
                a = e.code.match(c),
                o = a ? a.length + 1 : 1,
                u = new Array(o + 1).join('<span></span>')
              ;(l = document.createElement('span')).setAttribute(
                'aria-hidden',
                'true'
              ),
                (l.className = 'line-numbers-rows'),
                (l.innerHTML = u),
                n.hasAttribute('data-start') &&
                  (n.style.counterReset =
                    'linenumber ' +
                    (parseInt(n.getAttribute('data-start'), 10) - 1)),
                e.element.appendChild(l),
                m(n),
                Prism.hooks.run('line-numbers', e)
            }
          }
        }
      }),
      Prism.hooks.add('line-numbers', function (e) {
        ;(e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0)
      }),
      (Prism.plugins.lineNumbers = {
        getLine: function (e, t) {
          if ('PRE' === e.tagName && e.classList.contains(l)) {
            var n = e.querySelector('.line-numbers-rows'),
              r = parseInt(e.getAttribute('data-start'), 10) || 1,
              s = r + (n.children.length - 1)
            t < r && (t = r), s < t && (t = s)
            var i = t - r
            return n.children[i]
          }
        },
        resize: function (e) {
          m(e)
        }
      })
  }
})()
